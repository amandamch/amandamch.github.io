from flask import Flask, render_template
# import numpy/pandas/whatever when it becomes clear what I need to do with them

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/other-projects")
def other():
    return render_template("other-projects.html")