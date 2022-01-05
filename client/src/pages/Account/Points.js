import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
  const [parentSize, setParentSize] = useState(0);
  const [size, setSize] = useState(250)
  const [vart, setVart] = useState('h3')
  const parentRef = useRef(null);

  useEffect(() => {
    const { width, height } = getWindowDimensions();
    if (width < 700) {
      setSize(150)
      setVart('h4')
    }
  }, []);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress style={{ color: '#640000' }} variant="determinate" value={props.value} size={size} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <Typography variant={vart} component="div" color="text.secondary">
            {props.pts} PTS
          </Typography>
          <Typography variant='body'  color="text.secondary">
            {100 - props.value} PTS TILL NEXT REWARD
          </Typography>
        </div>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function Points({ pts, value }) {

  const [next, setNext] = useState(0);
  const [rewards, setRewards] = useState([
    {
      value: 100,
      reward: '$10 OFF'
    },
    {
      value: 200,
      reward: '$20 OFF'
    },
    {
      value: 300,
      reward: '$30 OFF'
    }
  ])

  const [dispRewards, setDispRewards] = useState([]);

  useEffect(() => {
    
  }, [])

  const showRewards = () => {
    let tmpPts = pts;
    let i = 0;
    if (pts >= 100 && pts <= 200 ) {
      return (
      <div>
        <Typography variant='h5'>SAVE $10 WITH 100 PTS</Typography>
      </div>
      )
    }
    else if (pts >= 200 && pts <= 300) {
      return <Typography variant='h5'>SAVE $20 WITH 200 PTS</Typography>
    }
    else if (pts >= 300 && pts <= 400) {
      return <Typography variant='h5'>SAVE $30 WITH 300 PTS</Typography>
    }
  }

  return (
    <div>
      <CircularProgressWithLabel value={value} pts={pts} />
      <br/>
      <br/>
      {showRewards()}
    </div>
  )
}