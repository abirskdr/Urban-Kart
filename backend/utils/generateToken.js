import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  //sign generates the token, we pass in three parameters, the first one is the payload (here the user id), secret Key as the second one and the expiration date as the third one
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

export default generateToken;
