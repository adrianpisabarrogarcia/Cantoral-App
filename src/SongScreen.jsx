//import react native
import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './Header';



const SongScreen = ({ itemId }) => {
    return (
        <SafeAreaProvider>
            <Header homeHeader={false} />
            <ScrollView>
                <Text style={songStyles.author}>Autor: Arturo Pérez Reverte</Text>
                <Text style={songStyles.song}>El día que me quieras tendrá más luz que junio;<br />
                    la noche que me quieras será de plenilunio,<br />
                    con notas de Beethoven vibrando en cada rayo<br />
                    sus inefables cosas, y habrá juntas más rosas<br />
                    que en todo el mes de mayo.<br /><br />
                    Contigo y para ti, deshojaré mis rosas,<br />
                    para cubrir tu cuna, de pétalos de rosa.<br /><br />
                    Para que me recuerdes, como quiero que me recuerdes,<br />
                    para que mi nombre en tus labios sea siempre una plegaria,<br />
                    cuando ya mis días, no sean más que un recuerdo,<br />
                    cuando el polvo del olvido, borre mi ayer, y mi nombre,<br />
                    no leas esta carta... ¡no la leas!... ¡te lo ruego!<br /><br />
                    ¡No quiero que te duelan, mis dolores, ni mis penas!<br />
                    ¡No quiero que te arrastre, la maldición que arrastro!<br />
                    ¡No quiero verte triste, cuando me pienses!... ¡No quiero verte nunca!<br /><br />
                    ¡Para ti basta, mi nombre, y mi recuerdo!<br />
                    ¡Cuando quieras, quiero a tu lado, una sombra!<br />
                    ¡Que tu mano, diga adiós, y no adiós... hasta mañana!<br />
                    ¡Que tus labios, nunca digan, que no me quieren!<br />
                    ¡Y que Dios, nos perdone, si es que un día, nos quisimos!<br />
                </Text>
            </ScrollView>
        </SafeAreaProvider>
    );
};

const songStyles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10
    },
    author: {
        fontSize: 14,
        textDecorationLine: 'underline',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#e8e8e6',
        textAlign: 'center'
    },
    song: {
        fontSize: 17,
        margin: 10,
        textAlign: 'center'
    }
});

export default SongScreen;