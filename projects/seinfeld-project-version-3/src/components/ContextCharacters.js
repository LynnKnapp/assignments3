import React from 'react';

const CharacterContext = React.createContext()

class ContextCharacters extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            characters: [
                {
                    name: 'Jerry',
                    img: require('./assets/puffy-1024x640.jpg'),
                    facts: "Jerry Seinfeld is the main protagonist and title character of the sitcom. The st" +
                            "raight man among his group of friends, this semi-fictionalized version of comedi" +
                            "an Jerry Seinfeld was named after, co-created by, based on, and played by Seinfe" +
                            "ld himself. The series revolves around Jerry's misadventures with his best frien" +
                            "d George Costanza, neighbor Cosmo Kramer, and ex-girlfriend Elaine Benes. He is " +
                            "usually the voice of reason amidst his friends antics and the focal point of the" +
                            " relationship. An eternal optimist, he rarely runs into major personal problems." +
                            " Jerry is the only main character on the show to maintain the same career a stan" +
                            "d-up comedian, throughout the series.  He is the most observational character, s" +
                            "arcastically commenting on his friends' quirky habits."
                }, {

                    name: 'Elaine',
                    img: require('./assets/Screen Shot 2019-09-30 at 3.32.15 PM.png'),
                    facts: "Elaine Marie Benes is played by Julia Louis-Dreyfus. Elaine's best friend is her" +
                            " ex-boyfriend Jerry Seinfeld, and she is also good friends with George Costanza " +
                            "and Cosmo Kramer. Elaine is normally intelligent and assertive, but also quite s" +
                            "uperficial. She's 'one of the boys', and despite the troubles they go through as" +
                            " a group, she remains the closest female friend to the main male cast throughout" +
                            " the series. Her traits are usually edgy and neurotic and she has a tendency to " +
                            "easily get angry with almost everybody, and has a habit of shoving people when d" +
                            "isplaying extreme emotion."
                }, {
                    name: 'Kramer',
                    img: require('./assets/Screen Shot 2019-09-30 at 3.26.31 PM.png'),
                    facts: "Cosmo Kramer, just referred to as 'Kramer', is noted as the most  funny characte" +
                            "r in the sitcom, played by Michael Richards.  He is loosely based on comedian Ke" +
                            "nny Kramer, who was Larry David's ex-neighbor across the hall.  He is Jerry's ne" +
                            "ighbor and friend from across the hall and friends with George and Elaine. Durin" +
                            "g th series, Kramer has no visible means of support; what few jobs he holds seem" +
                            " to be nothing more than larks. He is a lovable rogue, his trademarks include hi" +
                            "s upright hairstyle and vintage wardrobe, whose combination led Elaine to charac" +
                            "terize him as a 'hipster doofus' his taste in fresh fruit; love of occasional sm" +
                            "oking, Cuban cigars in particular; bursts through Jerry's apartment door without" +
                            " even bothering to knock first; frequent pratfalls and penchant for nonsensical," +
                            " percussive outbursts of noise to indicate skepticism, agreement, irritation and" +
                            " a variety of other feelings. He's been described as 'an extraordinary cross bet" +
                            "ween Eraserhead and Herman Munster'."
                }, {
                    name: 'Frank Costanza',
                    img: require('./assets/Screen Shot 2019-09-30 at 3.14.42 PM.png'),
                    facts: "Frank Costanza (played by Jerry Stiller) is George Costanza’s father on Seinfeld" +
                            ". As an Italian native, born in Tuscany, he brought a wealth of culture (perhaps" +
                            " culture shock) to the show and added dimension to George's character that was n" +
                            "ecessary to understand George's neurotic, paranoid and iracible personality, tha" +
                            "t was just like like Frank himself.  He was not necessarily a “warm and fuzzy” f" +
                            "ather. To the point, brisk, and sometimes abrasive, he dominated George and had " +
                            "a knack for guilt trips and eccentric likes and dislikes.  Some fun facts about " +
                            "Frank Costanza include his fluency in Korean, his love for food, and his work in" +
                            " as an Army cook. He’s also a fan of Latin American vinyl and he created the fir" +
                            "st man-bra named the 'Bro'for Kramer in “The Doorman.”"
                },{
                    name: 'George',
                    img: require('./assets/Screen Shot 2019-09-30 at 3.18.31 PM.png'),
                    facts: 'George Louis Costanza is a beloved neurotic character  played by Jason Alexander' +
                            '. He has variously been described as a "short, stocky, slow-witted, bald man"by ' +
                            'Elaine Benes and Costanza himself. He is described by Cosmo Kramer as "weak, spi' +
                            'neless, man of temptations" and "Lord of the Idiots", also by Costanza himself. ' +
                            'George and Jerry  have been friends since fourth grade and remained friends afte' +
                            'rwards. He is friends with Jerry Seinfeld, Cosmo Kramer, and Elaine Benes. The c' +
                            'haracter was originally based on Seinfeld co-creator Larry David but is surnamed' +
                            ' after Jerry Seinfeld"s real-life New York friend, Mike Costanza. Nothing ever s' +
                            'eems to go right for poor Georgie, from keeping a girlfriend to holding down a j' +
                            'ob.'
                },  {
                    name: 'Newman',
                    img: require('./assets/Screen Shot 2019-09-30 at 3.35.22 PM.png'),
                    facts: "Newman's role is primarily as Jerry's nemesis and a frequent collaborator in Kra" +
                            "mer's elaborate and bizarre schemes. Often described as Jerry's 'sworn enemy' ('" +
                            "The Andrea Doria'), Newman is cunning and often schemes against Jerry. He speaks" +
                            " often in a humorously sinister tone (mainly to Jerry). Jerry refers to Newman a" +
                            "s 'pure evil' on more than one occasion. Jerry's trademark greeting for Newman i" +
                            "s to say 'Hello, Newman' in a snide and condescending tone, while Newman respond" +
                            "s 'Hello, Jerry' in a falsely jovial tone. Helen Seinfeld also greets Newman in " +
                            "the same way."

                }
            ]

        }
    }



    render(){
        return(
            <CharacterContext.Provider value={{
                characters: this.state.characters
            }}>
                {this.props.children}
            </CharacterContext.Provider>
        )
    }
}

export const withChar = C => props => (
        <CharacterContext.Consumer>
            {value => <C {...value} {...props} />}
        </CharacterContext.Consumer>
    )

export default ContextCharacters