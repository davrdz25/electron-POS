import { useEffect, useState } from 'react'
import Overlay from './Components/Overlay';

import AppStyle from './App.module.css'
import Modal from './Components/Modal';
import CustomInput from './Components/CustomInput';
import CustomButton from './Components/CustomButton';
import { TSQLConfig } from './Types';
import ModalMessage from './Components/ModalMessage';

const sqlConfigInitialState: TSQLConfig = {
    ServerName: '',
    UserName: '',
    Password: '',
    DatabaseName: '',
}

const messageInitialState: any = {
    title: '',
    description: '',
}

const Main = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [messageVisible, setmessageVisible] = useState<boolean>(false)
    const [titleMessage, settitleMessage] = useState<string>('');
    const [descriptionMessage, setDescriptionMessage] = useState<string>('');
    const [typeMessage, setTypeMessage] = useState<'info' | 'warning' | 'error' | 'success'>('info');
    const [validConfig, setvalidConfig] = useState<boolean>(false)
    const [selected, setSelected] = useState<{ label: string; value: number } | undefined>(undefined)

     const options = [
    { label: 'Manzana', value: 1 },
    { label: 'Banana', value: 2 },
    { label: 'Naranja', value: 3 },
    { label: 'Uva', value: 4 }
  ]

    const [sqlConfig, setSqlConfig] = useState<TSQLConfig>({
        ServerName: '',
        UserName: '',
        Password: '',
        DatabaseName: 'POS'
    });

    useEffect(() => {
        configFileExists()
    }, [])

    const validateData = () => {

        if (sqlConfig.UserName && sqlConfig.UserName && sqlConfig.Password)
            setvalidConfig(true);
        else {
            setTypeMessage('warning')
            settitleMessage('Warning')
            setDescriptionMessage('All fields must be setted')
            setmessageVisible(true)
        }
    }

    const TestSQLConnection = async () => {
        try {
            const sqlConnected = await window.electron.testConnection(sqlConfig)

            if (sqlConnected) {
                setTypeMessage('success')
                settitleMessage('Success')
                setDescriptionMessage('Connected successfully');
                setmessageVisible(true)

                setTimeout(() => {
                    setModalVisible(false)
                    setSqlConfig(sqlConfigInitialState)
                    settitleMessage(messageInitialState.title)
                    setDescriptionMessage(messageInitialState.description)
                }, 2600);

                window.electron.createConfigFile(sqlConfig)

            } else {
                setTypeMessage('warning')
                settitleMessage('Warning')
                setDescriptionMessage("Not connected");
                setmessageVisible(true)
            }
        } catch (error) {
            setTypeMessage('error')
            settitleMessage('Error')
            setDescriptionMessage(String(error));
            setmessageVisible(true)
        }
    }

    const configFileExists = async () => {
        try {
            const fileExists: boolean = await window.electron.existsConfigFile();

            if (!fileExists)
                setModalVisible(true)
            else {
                await window.electron.connectDatabase();

                setTypeMessage('success');
                settitleMessage('Success')
                setDescriptionMessage("Connection successfull")
                setmessageVisible(true)
            }
        } catch (error) {
            setTypeMessage('error');
            settitleMessage('System Exception')
            setDescriptionMessage(String(error))
            setmessageVisible(true)
        }
    }

    return (
        <div className={AppStyle.mainContainer}>
            <Overlay visible={modalVisible} />
            <Modal
                title='Database configuration'
                isVisible={modalVisible} onClose={() => {
                    setModalVisible(false)
                }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                    <CustomInput value={sqlConfig.ServerName} direction='row' label='Server name' type='input' onChange={(e) => {
                        setSqlConfig({ ...sqlConfig, ServerName: e })
                    }} />
                    <CustomInput value={sqlConfig.UserName} direction='row' label='User name' type='input' onChange={(e) => {
                        setSqlConfig({ ...sqlConfig, UserName: e })

                    }} />
                    <CustomInput value={sqlConfig.Password} direction='row' label='Password' password type='input' onChange={(e) => {
                        setSqlConfig({ ...sqlConfig, Password: e })
                    }} />
                    <CustomButton title='Test connection' onPress={() => {
                        console.log("React sqlConfig", sqlConfig)

                        validateData()

                        if (validConfig)
                            TestSQLConnection()

                    }} fontColor='#FFFFFF' bgColor='#2D71F8' />
                </div>
            </Modal>
            <ModalMessage
                type={typeMessage}
                description={descriptionMessage}
                visible={messageVisible}
                title={titleMessage}
                duration={2500}
                onClose={() => setmessageVisible(false)}
            />
        </div>
    );
}

export default Main;