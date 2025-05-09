import { useEffect, useState } from 'react'
import Overlay from './Components/Overlay';

import AppStyle from './App.module.css'
import Modal from './Components/Modal';
import CustomInput from './Components/CustomInput';
import CustomButton from './Components/CustomButton';
import { TSQLConfig } from './Types';

const Main = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [sqlConfig, setSqlConfig] = useState<TSQLConfig>({
        ServerName: '',
        UserName: '',
        Password: '',
        DatabaseName: 'POS'
    });

    useEffect(() => {
        console.log("window.electron: ", window.electron);
        console.log("typeof createConfigFile: ", typeof window.electron?.createConfigFile);
      }, []);

    const [inputValue, setInputValue] = useState<string>("");

    const conn = async () => {
        const r = await window.electron.connectDatabase()
    }
    const sDatabaseConfig = async () => {
        const r = await window.electron.setDatabaseConfig(sqlConfig);
    }

    const ExistsDatabaseConfig = async () => {
        const existsFile = await window.electron.existsConfigFile()
        console.log('Existe', existsFile)
    }

    const SaveDatabaseConfig = async () => {
        try {
            const saveFile = await window.electron.createConfigFile(sqlConfig)
            console.log("Save file ", saveFile)
        } catch (err) {
            console.error("Error calling createConfigFile", err)
        }
    }
    

    return (
        <div className={AppStyle.mainView}>
            <Overlay visible={modalVisible} />
            <Modal
                title='Database configuration'
                isVisible={modalVisible} onClose={() => {
                    setModalVisible(false)
                }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                    <CustomInput value={sqlConfig.ServerName} direction='row' label='Server name' type='input' onChange={(e) => {
                        setSqlConfig({...sqlConfig, ServerName: e})
                    }} />
                    <CustomInput value={sqlConfig.UserName} direction='row' label='User name' type='input' onChange={(e) => {
                        setSqlConfig({...sqlConfig, UserName: e})

                    }} />
                    <CustomInput value={sqlConfig.Password} direction='row' label='Password' password type='input' onChange={(e) => {
                        setSqlConfig({...sqlConfig, Password: e})
                    }} />
                    <CustomButton title='Connect' onPress={() => {
                        console.log("React sqlConfig", sqlConfig)
                        sDatabaseConfig()
                        conn()
                        SaveDatabaseConfig()
                        }} fontColor='#FFFFFF' bgColor='#2D71F8' />
                </div>
            </Modal>
            <CustomButton title='Open config' onPress={() => {setModalVisible(true)}} fontColor='#FFFFFF' bgColor='#2D71F8'/>
            <CustomButton title='Check if file exists' onPress={() => {ExistsDatabaseConfig()}} fontColor='#FFFFFF' bgColor='#2D71F8'/>

        </div>
    );
}

export default Main;