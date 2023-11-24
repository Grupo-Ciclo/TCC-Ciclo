import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Image, TextInput, AsyncStorage, Modal, Alert, Linking, Text, TouchableOpacity, View } from 'react-native';
import SwipeableRow from '../../Linhas/Usuarios';
import api from '../../../services/api';
import url from '../../../services/url';
import { styles } from './styles';
import { showMessage, hideMessage } from "react-native-flash-message";
import { Evilions, Ionsions, AntDesign, Ionicons } from '@expo/vector-icons';
//import * as ImagePicker from 'expo-image-picker';

const DadosProps = {
    data: {
        id: string,
        local: string,
        QRcode: string,
        pesoAt: string,
        pesoMax: string,
    }
}

CardLixeira = ({ data } = DadosProps) => {

    const [abrirModal, setAbrirModal] = useState(false);
    const navigation = any = useNavigation();

    /*  async function excluir(nome, id) {
 
         Alert.alert('Sair', `Você tem certeza que deseja excluir o Registro : ` + nome, [
             {
                 text: 'Não',
                 style: 'cancel',
             },
 
             {
                 text: 'Sim',
                 onPress: async () => {
                     try {
                         const response = await api.get(`apiModelo/usuarios/excluir.php?id=${id}`);
 
                         showMessage({
                             message: "Excluído Sucesso",
                             description: "Registro Excluído",
                             type: "info",
                             duration: 800,
                         });
 
                         navigation.push('Usuarios');
                     } catch (error) {
                         Alert.alert('Não foi possivel excluir, tente novamente!')
                     }
                 }
             }
         ])
     } */

    return (
        <>
            {data.id === undefined && data.nome === undefined ?
                <Text style={{ color: '#595858', fontSize: 14, marginTop: 10, alignContent: "center", textAlign: "center" }}>Nenhum Registro Encontrado!</Text>
                :
                <View >
                    <TouchableOpacity
                        style={styles.box}
                    /* onPress={() => setAbrirModal(true)} */
                    >
                        <View style={{ flex: 1, flexDirection: 'row'}}>
                            <View style={{ width: 65 }}>
                                <Image style={{ width: 50, height: 10, }} source={{ uri: (url + 'apiModelo/imagem.jpg') }} />
                            </View>
                            <View style={{ width: '100%', marginTop: 3 }}>
                                <Text style={{ color: '#000', fontSize: 12 }}>{data.QRcode}</Text>
                                <Text style={{ color: '#000', fontSize: 12 }}>Local:{data.local}</Text>
                            </View>
                        </View>
                        <View style={styles.btnVeja}>
                            <Text style={styles.textBtnVeja}>Veja</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            }
            {/*  <Modal
                visible={abrirModal}
                animationType={'fade'}
                transparent={true}
                onRequestClose={() => {
                    setAbrirModal(!abrirModal)
                }}
            >
                <View style={styles.centralizarModal}>
                    <View style={styles.CardContainerModal}>
                        <TouchableOpacity
                            style={styles.removeItem}
                            onPress={() => setAbrirModal(false)}
                        >
                            <Evilions name="close" size={25} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.Cliente}>{data.nome} - {data.nivel}</Text>


                        <View style={styles.Section}>
                            <Ionsions style={styles.Icon} name="circle-person-outline" size={22} color="#c1c1c1" />

                        </View>



                        <View style={styles.Section}>
                            <Ionsions style={styles.Icon} name="mail" size={22} color="#c1c1c1" />
                            <Text style={styles.Entrada}>Email: {data.email}</Text>
                            <Text style={styles.Entrada}>Senha: {data.senha}</Text>
                        </View>


                        <TouchableOpacity onPress={() => Linking.openURL(url + 'painel/images/perfil/' + data.foto)}>
                            {(() => {
                                if (data.foto != 'sem-foto.jpg' && data.foto != '' && data.foto != null) {

                                    return (
                                        <View style={styles.viewImg}>
                                            <Image style={styles.ImagemModal} source={{ uri: (url + 'painel/images/perfil/' + data.foto) }} />
                                            <Text style={styles.textoAbrir}>(Clique para Abrir)</Text>
                                        </View>
                                    )

                                }

                            })()}
                        </TouchableOpacity>



                    </View>
                </View>
            </Modal> */}
        </>
    );
}

export default CardLixeira;