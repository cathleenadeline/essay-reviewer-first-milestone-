#!/usr/bin/env python
# encoding: utf-8
from flask import Flask, render_template, request
import os

app = Flask(__name__, template_folder='public')

def process_text(input_text):
    # Process the input text (capitalize all characters)
    return input_text.upper()

@app.route('/', methods=['GET', 'POST'])
def index():
    processed_text = ''

    if request.method == 'POST':
        # Get the text from the submitted form
        input_text = request.form['input_text']

        # Process the text
        processed_text = process_text(input_text)

    return render_template('index.html', processed_text=processed_text)

if __name__ == '__main__':
    app.run(debug=True)
