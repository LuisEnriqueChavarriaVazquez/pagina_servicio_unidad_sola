from flask import Flask,redirect,url_for,render_template,request


### cada que se hacen cambios en el html de la pagina es necesario ejecutar el siguiente comando para
### verlos reflejados

#npm run create-css

app=Flask(__name__)
@app.route('/',methods=['GET','POST'])
def home():
    return render_template('index.html')

#Unidades del contenidos
@app.route('/contenidos')
def contenidos():
    return render_template('contenidos.html')

#Glosario
@app.route('/glosario')
def glosario():
    return render_template('glosario.html')

#referencias
@app.route('/materialDeApoyo')
def materialDeApoyo():
    return render_template('materialDeApoyo.html')

#materialDeApoyo
@app.route('/referencias')
def referencias():
    return render_template('referencias.html')

if __name__ == '__main__':
    app.run(port=5000,debug=True)