from flask import Flask, request, send_file
from reportlab.pdfgen import canvas
from flask_cors import CORS
import zipfile
import tempfile
import io
import os

app = Flask(__name__)

CORS(app)

@app.route('/decompressor', methods=['POST'])
def decompressor():
    if 'file' not in request.files:
        return 'No file part in the request', 400

    file = request.files['file']

    if file.filename == '':
        return 'No selected file', 400

    # Create a temporary directory to extract files
    extract_path = 'extracted_files'
    os.makedirs(extract_path, exist_ok=True)

    with zipfile.ZipFile(file, 'r') as zip_ref:
        zip_ref.extractall(extract_path)
        file_info = zip_ref.infolist()[0]  # Assuming first file

    extracted_file_path = os.path.join(extract_path, file_info.filename)

    # Send the extracted file back as a response
    return send_file(
        extracted_file_path,
        as_attachment=True,
        download_name=file_info.filename,
        mimetype='application/octet-stream'
    )

@app.route('/compressor', methods=['POST'])
def compresser():
    if request.method == 'POST':
        # Check if the POST request has the file part
        if 'file' not in request.files:
            return 'No file part in the request', 400

        file = request.files['file']

        # If the user does not select a file, the browser submits an empty file without filename
        if file.filename == '':
            return 'No selected file', 400

        # Read the content of the uploaded file
        file_content = file.read()

        # Create a BytesIO object to hold the compressed file data
        zip_buffer = io.BytesIO()

        # Create a ZipFile object to compress the file content
        with zipfile.ZipFile(zip_buffer, 'w', zipfile.ZIP_DEFLATED) as zip_file:
            # Write the uploaded file into the ZIP file
            zip_file.writestr(file.filename, file_content)

        # Seek to the beginning of the BytesIO buffer
        zip_buffer.seek(0)

        # Send the ZIP file as an attachment
        return send_file(zip_buffer, as_attachment=True, download_name='compressed_file.zip', mimetype='application/zip')
    
@app.route('/repair', methods=['POST'])
def repair():
    if request.method == 'POST':
        if 'file' not in request.files:
            return 'No file part in the request', 400

        file = request.files['file']

        if file.filename == '':
            return 'No selected file', 400

        file_content = file.read()

        # Create a BytesIO object to hold the received file data
        corrupted_buffer = io.BytesIO(file_content)

        try:
            # Attempt to open the corrupted archive
            with zipfile.ZipFile(corrupted_buffer, 'r') as zip_file:
                # Extract the contents of the ZIP file to a temporary directory
                temp_dir = tempfile.mkdtemp()
                zip_file.extractall(temp_dir)

                # Compress the contents back into a new ZIP file
                repaired_buffer = io.BytesIO()
                with zipfile.ZipFile(repaired_buffer, 'w', zipfile.ZIP_DEFLATED) as new_zip:
                    for root, _, files in os.walk(temp_dir):
                        for file_name in files:
                            file_path = os.path.join(root, file_name)
                            relative_path = os.path.relpath(file_path, temp_dir)
                            new_zip.write(file_path, relative_path)

                repaired_buffer.seek(0)
                return send_file(repaired_buffer, as_attachment=True, download_name='repaired_file.zip', mimetype='application/zip')
        except (zipfile.BadZipFile, RuntimeError) as e:
            return f'Repair failed: {str(e)}', 400

@app.route('/split', methods=['POST'])
def split():
    if request.method == 'POST':
        if 'file' not in request.files:
            return 'No file part in the request', 400

        file = request.files['file']

        if file.filename == '':
            return 'No selected file', 400

        file_content = file.read()

        # Calculate the split point (half of the file size)
        split_point = len(file_content) // 2

        # Create two parts
        part1 = file_content[:split_point]
        part2 = file_content[split_point:]

        # Create buffers for the two parts
        buffer1 = io.BytesIO(part1)
        buffer2 = io.BytesIO(part2)

        # Set filenames for the parts
        part1_filename = 'part1_' + file.filename
        part2_filename = 'part2_' + file.filename

        # Create a zip file to hold the two parts
        zip_buffer = io.BytesIO()
        with zipfile.ZipFile(zip_buffer, 'w', zipfile.ZIP_DEFLATED) as zip_file:
            zip_file.writestr(part1_filename, buffer1.getvalue())
            zip_file.writestr(part2_filename, buffer2.getvalue())

        zip_buffer.seek(0)

        return send_file(zip_buffer, as_attachment=True, download_name='split_files.zip', mimetype='application/zip')

@app.route('/verify', methods=['POST'])
def check_integrity():
    if request.method == 'POST':
        if 'file' not in request.files:
            return 'No file part in the request', 400

        file = request.files['file']
        if file.filename == '':
            return 'No selected file', 400

        file_content = file.read()

        try:
            with zipfile.ZipFile(io.BytesIO(file_content), 'r') as zip_file:
                zip_file.testzip()  # Test the integrity of the archive
            return 'Archive is valid', 200
        except (zipfile.BadZipFile, RuntimeError) as e:
            return f'Archive integrity check failed: {str(e)}', 400

@app.route('/peek', methods=['POST'])
def list_files():
    if request.method == 'POST':
        if 'file' not in request.files:
            return 'No file part in the request', 400

        file = request.files['file']
        if file.filename == '':
            return 'No selected file', 400

        file_content = file.read()

        with zipfile.ZipFile(io.BytesIO(file_content), 'r') as zip_file:
            file_names = zip_file.namelist()

        return {'files': file_names}, 200


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
