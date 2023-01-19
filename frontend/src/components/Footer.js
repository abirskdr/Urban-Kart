import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  background-color: #1a1a1a;
  color: #8d8d8d;
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  color: #f6fffb;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  color: #f6fffb;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: '#1a1a1a' })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>URBAN KART</Logo>
        <Desc>
          We at Urban Kart believe that clothes are a way to express ourselves
          and also explore what our inner-selves. Joining our brand lets you
          experiment with your style with designs and products made by industry
          leading companies.
        </Desc>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link to="/" style={{ textDecoration: 'none', color: '#f6fffb' }}>
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/cart"
              style={{ textDecoration: 'none', color: '#f6fffb' }}
            >
              Cart
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/search/Gentlemen"
              style={{ textDecoration: 'none', color: '#f6fffb' }}
            >
              Gentlemen's Fashion
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/search/Ladies"
              style={{ textDecoration: 'none', color: '#f6fffb' }}
            >
              Ladies' Fashion
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="/search/kids"
              style={{ textDecoration: 'none', color: '#f6fffb' }}
            >
              Kids' Fashion
            </Link>
          </ListItem>
          <ListItem>
            <Link to="" style={{ textDecoration: 'none', color: '#f6fffb' }}>
              Terms and Conditions
            </Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacts</Title>
        <ContactItem>Pune, India</ContactItem>
        <ContactItem>+91 23456 78910</ContactItem>
        <ContactItem>urbanthreads@email.com</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
