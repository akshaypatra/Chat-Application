creating virtual environment using venv  for django project
->  python3 -m venv my_venv



## For Backend file :

1.to activate :

->  source my_venv/bin/activate

Note:  After activating , use pip3 to install packages

2.to deactivate :
->  deactivate


3.list of packages installed are (use :  ->    pip3 install package_name) :

1.djangorestframework
2.channels
3.channels-redis
4.pyjwt
5.django-cors-headers
6.daphne


4.to update requirements.txt  :
-> pip3 freeze > requirements.txt


#to install and run redis
->brew install redis
->brew services start redis

to check 
->redis-cli ping

to stop
->brew services stop redis

to run manually
->redis-server



## WEBSOCKET Testing

To check websocke is working or not
go to websocketking and 
put this 
->  ws://127.0.0.1:8000/ws/chat/2/?token=  {authtoken}  


add this to send a message
{
    "message":"websocket test"
}



## FOR FRONTEND :

- To start the app 
 -> npm start

 INSTALLATIONS (FOR users :   npm i dependencies   (it will install all the packages)) :

 + using material UI
 ->  npm install @mui/material @emotion/react @emotion/styled

 + using Bootstrap for components
 -> npm i bootstrap@5.3.3

 + axios for api requests
 -> npm i axios

 + react-router 
 -> npm i react-router-dom




