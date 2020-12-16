import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles'
import { Box, Typography, Toolbar, AppBar, Container, Grid, Card, CardActionArea, CardActions, CardMedia, CardContent, Avatar, Paper, Switch } from '@material-ui/core';
import { BookmarkBorder } from '@material-ui/icons';
import Pagination from '@material-ui/lab/Pagination';
import { createMuiTheme } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  appbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  hero: {
    backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./about-bg.jpg')",
    height: 500,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3rem"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%"
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex",

  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#333" : "#fff"
      }
    }
  })
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme} >
      <Paper>
        <AppBar position="static" color="primary" >
          <Toolbar className={classes.appbar}>
            <Typography variant="h4">
              Blog
          </Typography>
            <Switch
              checked={darkMode}
              onChange={() => {
                setDarkMode(!darkMode)
                console.log(darkMode)
              }}
            />
          </Toolbar>
        </AppBar>
        <Box className={classes.hero}>
          <Box>
            React Blog
        </Box>
        </Box>
        <Container maxWidth="lg" className={classes.blogsContainer}>
          <Typography variant="h4" className={classes.blogTitle}>
            Articles
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="./blog-img/cat-post-2.jpg"
                    title="IT"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Information Technology
                  </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                   </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src="./profile-img/c1.jpg" />
                    <Box ml={2}>
                      <Typography variant="subtitle2" component="p">
                        jenny
                  </Typography>
                      <Typography variant="subtitle2" color="textSecondary" component="p">
                        May 14, 2020
                  </Typography>
                    </Box>
                  </Box>
                  <BookmarkBorder />
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="./blog-img/5g.jpg"
                    title="IT"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      5G Technology
                  </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                   </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src="./profile-img/c2.jpg" />
                    <Box ml={2}>
                      <Typography variant="subtitle2" component="p">
                        Jack Smith
                  </Typography>
                      <Typography variant="subtitle2" color="textSecondary" component="p">
                        May 30, 2020
                  </Typography>
                    </Box>
                  </Box>
                  <BookmarkBorder />
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="./blog-img/causes-3.jpg"
                    title="IT"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Schools
                  </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                   </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src="./profile-img/c3.jpg" />
                    <Box ml={2}>
                      <Typography variant="subtitle2" component="p">
                        riya
                  </Typography>
                      <Typography variant="subtitle2" color="textSecondary" component="p">
                        july 6, 2020
                  </Typography>
                    </Box>
                  </Box>
                  <BookmarkBorder />
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="./blog-img/g3.jpg"
                    title="IT"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Childhood
                  </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                   </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src="./profile-img/c4.jpg" />
                    <Box ml={2}>
                      <Typography variant="subtitle2" component="p">
                        jing tian
                  </Typography>
                      <Typography variant="subtitle2" color="textSecondary" component="p">
                        january 27, 2020
                  </Typography>
                    </Box>
                  </Box>
                  <BookmarkBorder />
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="./blog-img/m-blog-1.jpg"
                    title="IT"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Tea
                  </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                   </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src="./profile-img/c5.jpg" />
                    <Box ml={2}>
                      <Typography variant="subtitle2" component="p">
                        shen watson
                  </Typography>
                      <Typography variant="subtitle2" color="textSecondary" component="p">
                        oct 12, 2020
                  </Typography>
                    </Box>
                  </Box>
                  <BookmarkBorder />
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="./blog-img/post-img2.jpg"
                    title="IT"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Team work
                  </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                   </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src="./profile-img/c6.jpg" />
                    <Box ml={2}>
                      <Typography variant="subtitle2" component="p">
                        Lara
                  </Typography>
                      <Typography variant="subtitle2" color="textSecondary" component="p">
                        june 14, 2020
                  </Typography>
                    </Box>
                  </Box>
                  <BookmarkBorder />
                </CardActions>
              </Card>
            </Grid>

          </Grid>
          <Box py={4} className={classes.paginationContainer}>
            <Pagination count={10} />
          </Box>
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
