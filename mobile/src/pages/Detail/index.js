import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';
import logopng from '../../assets/logo.png';

export default function Detail() {
    const navigation = useNavigation();
    const message = 'Ola APad, estou entrendo me contato pois gostaria de ajudar no caso "cadelinha atropelada com o valor de R$ 120,00'


    function navegateBack(){
        navigation.goBack()
    }

    function sendEmail(){
        MailComposer.composeAsync({
            subject: 'Heros do caso: Cadelinha atropelada',
            recipients: ['junior.leles@hotmail.com'],
            body: message,
        })

    }

    function sendWhatsApp(){
       Linking.openURL(`whatsapp://send?phone=5511985346958&text=${message}`);
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logopng}/>

                <TouchableOpacity onPress={navegateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
                
           </View>
           <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0} ]}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>  
           </View>

           <View style={styles.contacBox}>
               <Text style={styles.heroTitle}>Salve o dia</Text>
               <Text style={styles.heroTitle}>Seja um heroe desse caso.</Text>

               <Text style={styles.heroDescription}>Entre em contato:</Text>
               

             <View style={styles.actions}>

               <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                   <Text style={styles.actionText}>WhatsApp</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.action} onPress={sendEmail}>
                   <Text style={styles.actionText}>E-Mail</Text>
               </TouchableOpacity>
                 
             </View>
        </View>
    </View>

    );
}