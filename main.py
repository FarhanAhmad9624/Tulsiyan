from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def main_page():
    return render_template('./index.html')

@app.route("/login")
def login_page():
    return render_template('./login.html')

# app.run(debug=True)