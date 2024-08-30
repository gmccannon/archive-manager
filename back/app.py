from flask import Flask, request, send_file
from reportlab.pdfgen import canvas
from flask_cors import CORS
import zipfile
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
        file_info = zip_ref.infolist()[0]  # Assuming you want the first file

    extracted_file_path = os.path.join(extract_path, file_info.filename)

    # Send the extracted file back as a response
    return send_file(
        extracted_file_path,
        as_attachment=True,
        download_name=file_info.filename,
        mimetype='application/octet-stream'
    )

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
