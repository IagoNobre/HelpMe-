import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin-top: 15px;
align-items: center;
  h1 {
    color: #B478FF;
    font-size: 80pt;
    font-weight: 300;
    font-family: 'Caveat Brush', cursive;
  }
  h2 {
    font-size: 80pt;
    color: #A25BFF;
    font-weight: 500;
    font-family: 'Caveat Brush', cursive;
  }
  @media only screen and (min-height: 812px){
    margin-top: 80px;
  }
`

export const Text = styled.div`
margin-top: 10px;
margin: 0 auto;
align-items: center;
font-family: Century Gothic,CenturyGothic,AppleGothic,sans-serif; 
color: #FFF;
text-align: center;
max-width: 550px;
line-height: 44px;
font-size: 35pt;
@media only screen and (max-width : 968px){
  h3{
    font-size: 30pt;
  }
}
`

export const Button = styled.div`

@media only screen and (min-width : 968px){
  display: flex;
  width: 300px;
}

margin: 0 auto;
align-items: center;
margin-top: 25px;
width: 300px;
button {
  margin-top: 15px;
  background: linear-gradient(45deg, #A25BFF, #6D9AE8);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border: 0;
  padding: 0 15px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  width: 300px;
  height: 50px;
}

button:hover  {
    transition: 0.5s;
    border: 2px solid white;
  }
`

export const Books = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  align-items: center;
  width: 250px;
  img {
    width: 250px;
  }
`