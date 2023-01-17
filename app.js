const express = require('express');

const app = express();
/** Configure view engine */
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use(express.static('public'));

app.get('/', (req, res, next) => {
    const name = 'Gabardino';
    res.render('home', {
        name: name
    }
    );
});

app.get('/about', (req, res, next) => {
    const textEN = {
        aboutH2: `Who is`,
        aboutP: `&ensp;&ensp;&ensp;&ensp;Welcome to the official website of Gabardino, the musical project of <b>Alejandro Rodriguez Molina</b>. Born in Málaga, Andalucía in 1988, Gabardino's music is a unique blend of cantautor and Andalusian rock. With a unique authentic point of view, Gabardino's lyrics delve into what truly matters in life and the world.
        <br>
        &ensp;&ensp;&ensp;&ensp;His love for natural environments is reflected in his music, which captures the raw beauty and emotion of the <b>Andalusian landscape</b>. Gabardino's music is like climbing a mountain, it takes you on a <b>journey</b>, with each song and each note representing a step towards <b>self-discovery</b> and understanding. Gabardino reminds us that life is short and we should cherish the people who surround us and make the most of every moment. <br>
        &ensp;&ensp;&ensp;&ensp;Here on our website, you can find information about upcoming shows, listen to Gabardino's music, and purchase merchandise. Thank you for visiting and we hope you enjoy the music of Gabardino!`
    }
    const textEs = {
        aboutH2: `Quién es`,
        aboutP: `&ensp;&ensp;&ensp;&ensp;Gabardino es el proyecto musical de <b>Alejandro Rodríguez Molina</b>. Nacido en Málaga, Andalucía en 1988, la música de Gabardino es una mezcla única de <b>cantautor</b> y rock andaluz. Con un punto de vista único y auténtico, las letras de Gabardino ahondan en <b>lo que verdaderamente importa en la vida.</b>
        <br>
        &ensp;&ensp;&ensp;&ensp;Su <b>amor</b> por los entornos naturales se refleja en su música, que captura la belleza cruda y la emoción del paisaje andaluz. La música de Gabardino es como <b>escalar una montaña</b>, te lleva a un <b>viaje</b> donde cada canción y cada nota representan un paso hacia el autodescubrimiento y la comprensión. Gabardino nos recuerda que la vida es corta y que debemos apreciar a las personas que nos rodean y <b>aprovechar al máximo cada momento.</b><br>
        &ensp;&ensp;&ensp;&ensp;Aquí encontraréis información sobre los próximos conciertos, podréis escuchar la música de Gabardino y adquirir merchandising. <b>Gracias por visitarnos y esperamos que disfrutes de la música de Gabardino.</b>`
    }
    res.render('about', {
        aboutH2: textEs.aboutH2,
        aboutP: textEs.aboutP
    });
});

app.get('/works', (req, res, next) => {
    const name = 'Gabardino';
    res.render('works', {
        name: name
    });
});

app.get('/gallery', (req, res, next) => {
    const name = 'Gabardino';
    res.render('gallery', {
        name: name
    });
});

const port = 3000;
app.listen(port, () => console.log(`Application running at port ${port}`));