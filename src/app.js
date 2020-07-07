import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import ReactPlayer from 'react-player'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import AlarmSet from './components/AlarmSet.js'
import AlarmSound from './components/AlarmSound.js'
import Default from './components/Default.js'
import One from './components/One.js'
import Two from './components/Two.js'
import Three from './components/Three.js'
import Four from './components/Four.js'
import Five from './components/Five.js'
import Six from './components/Six.js'
import Seven from './components/Seven.js'
import Eight from './components/Eight.js'
import Nine from './components/Nine.js'
import Zero from './components/Zero.js'
import Clock from './components/Clock.js'
import './css/style.scss';
const {useState, useEffect} = React

const App = (props) => {

    const [player, setPlayer] = useState({
        url: null,
        pip: false,
        playing: false,
        controls: false,
        light: false,
        volume: 0.7,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false
    })

    const [time, setTime] = useState('')

    const [theme, setTheme] = useState('awake')

    const [alarm, setAlarm] = useState({
        hourTens: '',
        hourOnes: '',
        minuteTens: '',
        minuteOnes: ''
    })

    const [alarmCheck, setAlarmCheck] = useState(false)

    const [genre, setGenre] = useState(null)

    const handleGenre = async (genre) =>{
        event.preventDefault();
        try{
            const request = await fetch(`https://beclock.herokuapp.com/alarms/${genre}`)
            const response = await request.json()
            await setGenre(response)
        } catch(error){
            console.error(error)
        }
    }

    const [url, setURL] = useState(null)

    const handleURL = (event) =>{
        setURL({[event.target.name]: event.target.value})
    }

    const handleVolumeChange = (e) => {
        setPlayer({...player, volume: parseFloat(e.target.value) })
      }

    const compare = () =>{
        if(`${alarm.hourTens}${alarm.hourOnes}:${alarm.minuteTens}${alarm.minuteOnes}:00` == time){
            setTheme('awake');
            setPlayer({...player, playing: true})
        }
    };

    useEffect(()=>{
        if(alarmCheck === true){
            compare()
        }
    }, [compare])
    

    const transition = () =>{
    }
    
    useEffect(()=>{
        document.documentElement.setAttribute('data-theme', theme);
    }, [transition])

    setInterval(function(){setTime(moment().format('HH:mm:ss'))}, 1000)

    const checkTime = (num) =>{
        if(time.split('')[num] == '0'){
            return <Zero/>
        } else if (time.split('')[num] == '1'){
            return <One/>
        } else if (time.split('')[num] == '2'){
            return <Two/>
        } else if (time.split('')[num] == '3'){
            return <Three/>
        } else if (time.split('')[num] == '4'){
            return <Four/>
        } else if (time.split('')[num] == '5'){
            return <Five/>
        } else if (time.split('')[num] == '6'){
            return <Six/>
        }  else if (time.split('')[num] == '7'){
            return <Seven/>
        } else if (time.split('')[num] == '8'){
            return <Eight/>
        } else if (time.split('')[num] == '9'){
            return <Nine/>
        }
    }

    const alarmTime = (alarmState) =>{
        if(alarmState == ''){
            return <Default/>
        } else if (alarmState == '0'){
            return <Zero/>
        }else if (alarmState == '1'){
            return <One/>
        } else if (alarmState == '2'){
            return <Two/>
        }else if (alarmState == '3'){
            return <Three/>
        }else if (alarmState == '4'){
            return <Four/>
        }else if (alarmState == '5'){
            return <Five/>
        }else if (alarmState == '6'){
            return <Six/>
        }else if (alarmState == '7'){
            return <Seven/>
        }else if (alarmState == '8'){
            return <Eight/>
        }else if (alarmState == '9'){
            return <Nine/>
        }
    }

    const raiseHourTens = (alarmState) =>{
        if (alarmState == ''){
            setAlarm({hourTens: '0', hourOnes: '0', minuteTens: '0', minuteOnes: '0'})
        } else if (alarmState == '0'){
            setAlarm({...alarm, hourTens: '1'})
        } else if (alarmState == '1'){
            setAlarm({...alarm, hourTens: '2', hourOnes: '0'})
        } else if (alarmState == '2'){
            setAlarm({...alarm, hourTens: '0'})
        }
    }

    const raiseMinuteTens = (alarmState) =>{
        if (alarmState == ''){
            setAlarm({hourTens: '0', hourOnes: '0', minuteTens: '0', minuteOnes: '0'})
        } else if (alarmState == '0'){
            setAlarm({...alarm, minuteTens: '1'})
        } else if (alarmState == '1'){
            setAlarm({...alarm, minuteTens: '2'})
        } else if (alarmState == '2'){
            setAlarm({...alarm, minuteTens: '3'})
        } else if (alarmState == '3'){
            setAlarm({...alarm, minuteTens: '4'})
        } else if (alarmState == '4'){
            setAlarm({...alarm, minuteTens: '5'})
        } else if (alarmState == '5'){
            setAlarm({...alarm, minuteTens: '0'})
        }
    }

    const raiseHourOnes = (alarmState, alarmStateHourTens) =>{
        if (alarmStateHourTens == ''){
            setAlarm({hourTens: '0', hourOnes: '0', minuteTens: '0', minuteOnes: '0'})
        }
        if (alarmStateHourTens == '1' || alarmStateHourTens == '0'){
            if (alarmState == ''){
                setAlarm({hourTens: '0', hourOnes: '0', minuteTens: '0', minuteOnes: '0'})
            } else if (alarmState == '0'){
                setAlarm({...alarm, hourOnes: '1'})
            } else if (alarmState == '1'){
                setAlarm({...alarm, hourOnes: '2'})
            } else if (alarmState == '2'){
                setAlarm({...alarm, hourOnes: '3'})
            } else if (alarmState == '3'){
                setAlarm({...alarm, hourOnes: '4'})
            } else if (alarmState == '4'){
                setAlarm({...alarm, hourOnes: '5'})
            } else if (alarmState == '5'){
                setAlarm({...alarm, hourOnes: '6'})
            } else if (alarmState == '6'){
                setAlarm({...alarm, hourOnes: '7'})
            } else if (alarmState == '7'){
                setAlarm({...alarm, hourOnes: '8'})
            } else if (alarmState == '8'){
                setAlarm({...alarm, hourOnes: '9'})
            } else if (alarmState == '9'){
                setAlarm({...alarm, hourOnes: '0'})
            }
        }
        if (alarmStateHourTens == '2'){
            if (alarmState == ''){
                setAlarm({hourTens: '0', hourOnes: '0', minuteTens: '0', minuteOnes: '0'})
            } else if (alarmState == '0'){
                setAlarm({...alarm, hourOnes: '1'})
            } else if (alarmState == '1'){
                setAlarm({...alarm, hourOnes: '2'})
            } else if (alarmState == '2'){
                setAlarm({...alarm, hourOnes: '3'})
            } else if (alarmState == '3'){
                setAlarm({...alarm, hourOnes: '0'})
            }
            
        }
    }

    const raiseMinuteOnes = (alarmState) =>{
        if (alarmState == ''){
            setAlarm({hourTens: '0', hourOnes: '0', minuteTens: '0', minuteOnes: '0'})
        } else if (alarmState == '0'){
            setAlarm({...alarm, minuteOnes: '1'})
        } else if (alarmState == '1'){
            setAlarm({...alarm, minuteOnes: '2'})
        } else if (alarmState == '2'){
            setAlarm({...alarm, minuteOnes: '3'})
        } else if (alarmState == '3'){
            setAlarm({...alarm, minuteOnes: '4'})
        } else if (alarmState == '4'){
            setAlarm({...alarm, minuteOnes: '5'})
        } else if (alarmState == '5'){
            setAlarm({...alarm, minuteOnes: '6'})
        } else if (alarmState == '6'){
            setAlarm({...alarm, minuteOnes: '7'})
        } else if (alarmState == '7'){
            setAlarm({...alarm, minuteOnes: '8'})
        } else if (alarmState == '8'){
            setAlarm({...alarm, minuteOnes: '9'})
        } else if (alarmState == '9'){
            setAlarm({...alarm, minuteOnes: '0'})
        }
    }

    const lowerHourTens = (alarmState) =>{
        if (alarmState == ''){
            setAlarm({hourTens: '0', hourOnes: '0', minuteTens: '0', minuteOnes: '0'})
        } else if (alarmState == '0'){
            setAlarm({...alarm, hourTens: '2', hourOnes: '0'})
        } else if (alarmState == '2'){
            setAlarm({...alarm, hourTens: '1'})
        } else if (alarmState == '1'){
            setAlarm({...alarm, hourTens: '0'})
        }
    }

    const lowerMinuteTens = (alarmState) =>{
        if (alarmState == ''){
            setAlarm({hourTens: '0', hourOnes: '0', minuteTens: '0', minuteOnes: '0'})
        } else if (alarmState == '0'){
            setAlarm({...alarm, minuteTens: '5'})
        } else if (alarmState == '5'){
            setAlarm({...alarm, minuteTens: '4'})
        } else if (alarmState == '4'){
            setAlarm({...alarm, minuteTens: '3'})
        } else if (alarmState == '3'){
            setAlarm({...alarm, minuteTens: '2'})
        } else if (alarmState == '2'){
            setAlarm({...alarm, minuteTens: '1'})
        } else if (alarmState == '1'){
            setAlarm({...alarm, minuteTens: '0'})
        }
    }

    const lowerHourOnes = (alarmState, alarmStateHourTens) =>{
        if (alarmStateHourTens == ''){
            setAlarm({hourTens: '0', hourOnes: '0', minuteTens: '0', minuteOnes: '0'})
        }
        if (alarmStateHourTens == '1' || alarmStateHourTens == '0'){
            if (alarmState == ''){
                setAlarm({...alarm, hourOnes: '0'})
            } else if (alarmState == '0'){
                setAlarm({...alarm, hourOnes: '9'})
            } else if (alarmState == '9'){
                setAlarm({...alarm, hourOnes: '8'})
            } else if (alarmState == '8'){
                setAlarm({...alarm, hourOnes: '7'})
            } else if (alarmState == '7'){
                setAlarm({...alarm, hourOnes: '6'})
            } else if (alarmState == '6'){
                setAlarm({...alarm, hourOnes: '5'})
            } else if (alarmState == '5'){
                setAlarm({...alarm, hourOnes: '4'})
            } else if (alarmState == '4'){
                setAlarm({...alarm, hourOnes: '3'})
            } else if (alarmState == '3'){
                setAlarm({...alarm, hourOnes: '2'})
            } else if (alarmState == '2'){
                setAlarm({...alarm, hourOnes: '1'})
            } else if (alarmState == '1'){
                setAlarm({...alarm, hourOnes: '0'})
            }
        }
        if (alarmStateHourTens == '2'){
            if (alarmState == ''){
                setAlarm({...alarm, hourOnes: '0'})
            } else if (alarmState == '0'){
                setAlarm({...alarm, hourOnes: '3'})
            } else if (alarmState == '3'){
                setAlarm({...alarm, hourOnes: '2'})
            } else if (alarmState == '2'){
                setAlarm({...alarm, hourOnes: '1'})
            } else if (alarmState == '1'){
                setAlarm({...alarm, hourOnes: '0'})
            }
            
        }
    }

    const lowerMinuteOnes = (alarmState) =>{
        if (alarmState == ''){
            setAlarm({hourTens: '0', hourOnes: '0', minuteTens: '0', minuteOnes: '0'})
        } else if (alarmState == '0'){
            setAlarm({...alarm, minuteOnes: '9'})
        } else if (alarmState == '9'){
            setAlarm({...alarm, minuteOnes: '8'})
        } else if (alarmState == '8'){
            setAlarm({...alarm, minuteOnes: '7'})
        } else if (alarmState == '7'){
            setAlarm({...alarm, minuteOnes: '6'})
        } else if (alarmState == '6'){
            setAlarm({...alarm, minuteOnes: '5'})
        } else if (alarmState == '5'){
            setAlarm({...alarm, minuteOnes: '4'})
        } else if (alarmState == '4'){
            setAlarm({...alarm, minuteOnes: '3'})
        } else if (alarmState == '3'){
            setAlarm({...alarm, minuteOnes: '2'})
        } else if (alarmState == '2'){
            setAlarm({...alarm, minuteOnes: '1'})
        } else if (alarmState == '1'){
            setAlarm({...alarm, minuteOnes: '0'})
        }
    }

    return (
        <div className="app">
            <Header/>
            <Clock checkTime={checkTime} time={time}/>
            <div className="app__alarm">
                <AlarmSound ReactPlayer={ReactPlayer} player={player} setPlayer={setPlayer} handleVolumeChange={handleVolumeChange} genre={genre} handleGenre={handleGenre} url={url} setURL={setURL} handleURL={handleURL}/>
                <AlarmSet alarm={alarm} setAlarm={setAlarm} alarmTime={alarmTime} raiseHourTens={raiseHourTens} raiseMinuteTens={raiseMinuteTens} raiseHourOnes={raiseHourOnes} raiseMinuteOnes={raiseMinuteOnes} lowerHourTens={lowerHourTens} lowerMinuteOnes={lowerMinuteOnes} lowerHourOnes={lowerHourOnes} lowerMinuteTens={lowerMinuteTens} compare={compare} setAlarmCheck={setAlarmCheck} alarmCheck={alarmCheck} setTheme={setTheme} ReactPlayer={ReactPlayer} player={player} setPlayer={setPlayer}/>
            </div>
            <Footer/>
        </div>
    );
};

const target = document.getElementById('app');
ReactDOM.render(<App />, target);