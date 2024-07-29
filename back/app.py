from flask import Flask, request, send_file
from reportlab.pdfgen import canvas
from flask_cors import CORS
import zipfile
import io

app = Flask(__name__)

CORS(app)

@app.route('/uploader', methods=['GET', 'POST'])
def uploader():
    if request.method == 'POST':
        # Check if the POST request has the file part
        if 'file' not in request.files:
            return 'No file part in the request'

        file = request.files['file']

        # If the user does not select a file, the browser submits an empty file without filename
        if file.filename == '':
            return 'No selected file'

        # Read the content of the uploaded text file
        text_content = file.read().decode('utf-8')

        # Generate a PDF from the text content
        pdf_path = '/tmp/generated_pdf.pdf'
        generate_pdf(text_content, pdf_path)

        # Send the PDF file as an attachment
        return send_file(pdf_path, as_attachment=True)

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

def generate_pdf(text_content, pdf_path):
    # Create a canvas
    c = canvas.Canvas(pdf_path)

    # Set up fonts and size
    c.setFont("Helvetica", 12)

    # Write text content to the PDF
    text_lines = text_content.splitlines()
    y_position = 750  # Start position
    for line in text_lines:
        c.drawString(50, y_position, line)
        y_position -= 20  # Adjust vertical spacing

    # Save the PDF
    c.save()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
