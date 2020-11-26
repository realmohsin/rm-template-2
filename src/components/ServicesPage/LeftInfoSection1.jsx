import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Container, Typography } from '@material-ui/core'
import ThemedContentBox from '../ThemedContentBox'
import leftInfoSection1Bg from '../../assets/images/services-page/left-info-section-1-bg.jpg'

const useStyles = makeStyles(theme => ({
  leftInfoSection1: {
    paddingTop: '31rem',
    backgroundImage: `url(${leftInfoSection1Bg})`,
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
    height: '84.7rem',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      height: '78rem',
      paddingTop: '22rem'
    },
    [theme.breakpoints.down('xs')]: {
      height: '72rem',
      paddingTop: '18rem',
      backgroundPosition: '50% 50%'
    }
  },
  extraThemedBox: {
    [theme.breakpoints.down('sm')]: {
      margin: 'auto'
    }
  }
}))

const LeftInfoSection1 = props => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <section className={classes.leftInfoSection1}>
      <Container>
        <Grid container>
          <Grid item sm={12} md={6}>
            <ThemedContentBox
              title='Seeking and Finding the Right Direction'
              subtitle='Pre-Construction'
              onDarkBg
              extraClass={classes.extraThemedBox}
            >
              <Typography variant='body1' gutterBottom>
                Schimenti’s early involvement prior to construction can greatly
                minimize costly surprises and allow you to ask “what-if”
                questions about budgeting, scheduling, materials, and design
                options. Our knowledge of material and construction costs,
                structural alternatives, and mechanical and electrical systems
                can significantly impact the quality, cost, and timing of
                construction.
              </Typography>
            </ThemedContentBox>
          </Grid>
          <Grid item sm={0} md={6} />
        </Grid>
      </Container>
    </section>
  )
}

export default LeftInfoSection1
