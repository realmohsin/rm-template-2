import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container, Typography } from '@material-ui/core'
import ThemedContentBox from '../ThemedContentBox'

const useStyles = makeStyles(theme => ({
  leftInfoSection2: {
    paddingTop: '35rem',
    // backgroundImage: `url(${leftInfoSection2Bg})`,
    // backgroundSize: 'cover',
    // backgroundPosition: '0% 0%',
    height: '86rem',
    color: 'white',
    position: 'relative',
    '& > .gatsby-image-wrapper-constrained': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    },
    [theme.breakpoints.down('sm')]: {
      height: '78rem',
      paddingTop: '22rem'
    },
    [theme.breakpoints.down('xs')]: {
      height: '70rem',
      paddingTop: '18rem',
      backgroundPosition: '100% 50%'
    }
  },
  bgImg: {
    zIndex: -10
  },
  extraThemedBox: {
    [theme.breakpoints.down('sm')]: {
      margin: 'auto'
    }
  }
}))

const LeftInfoSection2 = props => {
  const classes = useStyles()

  return (
    <section className={classes.leftInfoSection2}>
      <StaticImage
        src='../../assets/images/services-page/left-info-section-2-bg.jpg'
        alt='Background'
        className={classes.bgImg}
        objectPosition='0% 0%'
      />
      <Container>
        <Grid container>
          <Grid item sm={12} md={6}>
            <ThemedContentBox
              title='Building from Start to Finish'
              subtitle='General Construction'
              onDarkBg
              extraClass={classes.extraThemedBox}
            >
              <Typography variant='body1' gutterBottom>
                From inception to completion, our construction management group
                makes sure the overall planning, coordination, and control will
                result in a project that meets its budget, deadline, and quality
                standards. We provide pre-planning, design, construction,
                engineering, and management guidance that delivers the best
                possible results.
              </Typography>
            </ThemedContentBox>
          </Grid>
          <Grid item sm={0} md={6} />
        </Grid>
      </Container>
    </section>
  )
}

export default LeftInfoSection2
