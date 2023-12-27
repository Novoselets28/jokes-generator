/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';

import { setTopText, setBottomText, setRandomImage } from '../redux/memeReducer';

const Meme = () => {
  const dispatch = useDispatch();
  const meme = useSelector((state) => state.meme);
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.imgflip.com/get_memes');
        const data = await res.json();
        setAllMemes(data.data.memes);
      } catch (error) {
        console.error('Error fetching memes:', error);
      }
    };
  
    fetchData();
  
  }, []);
  

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    dispatch(setRandomImage(url));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'topText') {
      dispatch(setTopText(value));
    } else if (name === 'bottomText') {
      dispatch(setBottomText(value));
    }
  };

  return (
    <Container
      style={{ paddingTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <form noValidate autoComplete="off" className='form' style={{ width: '100%', maxWidth: '400px' }}>
        <TextField
          id="topText"
          label="Top Text"
          variant="outlined"
          className='form--input'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
          style={{ marginBottom: '17px' }}
        />
        <TextField
          id="bottomText"
          label="Bottom Text"
          variant="outlined"
          className='form--input'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
          style={{ marginBottom: '17px' }}
        />
        <Button
          variant="contained"
          color="primary"
          className='btn'
          onClick={getMemeImage}
          style={{
            width: '100%',
            cursor: 'pointer',
            background: 'linear-gradient(90deg, #672280 1.18%, #a626d3 100%)'
          }}
        >
          Get a new meme image
        </Button>
      </form>
      <Card style={{ position: 'relative', marginTop: '20px' }}>
        <CardMedia
          component="img"
          alt="Meme Image"
          height="auto"
          image={meme.randomImage}
          style={{ maxWidth: '100%' }}
        />
        <CardContent style={{ color: '#fff', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Typography variant="body2" style={{ fontSize: '30px', textAlign: 'center' }}>
            {meme.topText}
          </Typography>
          <Typography variant="body2" style={{ fontSize: '30px', textAlign: 'center' }}>
            {meme.bottomText}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Meme;
