import React from 'react';
import ReactDOM from 'react-dom';


export default (props) => {
    let app = (() => {

        function updateSlider(element) {
          if (element) {
            let parent = element.parentElement,
              lastValue = parent.getAttribute('data-slider-value');
      
            if (lastValue === element.value) {
              return; // No value change, no need to update then
            }
      
            parent.setAttribute('data-slider-value', Math.round(((element.value)*100)*100)/100);
            let $thumb = parent.querySelector('.app__alarm--sound--body--media--volume--slider--thumb'),
              $bar = parent.querySelector('.app__alarm--sound--body--media--volume--slider--bar'),
              pct = 100 * element.value * ((parent.clientHeight - $thumb.clientHeight) / parent.clientHeight);
      
            $thumb.style.bottom = `${pct}%`;
            $bar.style.height = `calc(${pct}% + ${$thumb.clientHeight/2}px)`;
            $thumb.textContent = `${Math.round(((element.value)*100)*10)/10}%`;
          }
        }
        return {
          updateSlider: updateSlider
        };
      
      })();
      
      (function initAndSetupTheSliders() {
        const inputs = [].slice.call(document.querySelectorAll('.app__alarm--sound--body--media--volume--slider input'));
        inputs.forEach(input => app.updateSlider(input));
        // Cross-browser support where value changes instantly as you drag the handle, therefore two event types.
        inputs.forEach(input => input.addEventListener('input', element => app.updateSlider(input)));
        inputs.forEach(input => input.addEventListener('change', element => app.updateSlider(input)));
      })();
    return (
        <div className="app__alarm--sound">
            <div className="app__alarm--sound--title">Step 1. Choose an alarm</div>
            <div className="app__alarm--sound--body">
                <div className="app__alarm--sound--body--media">
                    <div className="app__alarm--sound--body--media--presets">
                        <div className="app__alarm--sound--body--media--presets--title">Bryce's Favorites</div>
                        <div className="app__alarm--sound--body--media--presets--rock" onClick={()=>{props.setPlayer({...props.player, url: null}), props.handleGenre('Rock')}}>Rock</div>
                        <div className="app__alarm--sound--body--media--presets--rnb" onClick={()=>{props.setPlayer({...props.player, url: null}), props.handleGenre('R&B')}}>R&B</div>
                        <div className="app__alarm--sound--body--media--presets--rap" onClick={()=>{props.setPlayer({...props.player, url: null}), props.handleGenre('Rap')}}>Rap</div>
                        <div className="app__alarm--sound--body--media--presets--pop" onClick={()=>{props.setPlayer({...props.player, url: null}), props.handleGenre('Pop')}}>Pop</div>
                        <div className="app__alarm--sound--body--media--presets--electronic" onClick={()=>{props.setPlayer({...props.player, url: null}), props.handleGenre('Electronic')}}>Electronic</div> 
                        <div className="app__alarm--sound--body--media--presets--country" onClick={()=>{props.setPlayer({...props.player, url: null}), props.handleGenre('Country')}}>Country</div>
                        <div className="app__alarm--sound--body--media--presets--misc" onClick={()=>{props.setPlayer({...props.player, url: null}), props.handleGenre('Misc')}}>Misc</div>
                    </div>
                    {props.player.url ? 
                    <div className="app__alarm--sound--body--media--video">
                    <props.ReactPlayer url={props.player.url} playing={props.player.playing} volume={props.player.volume} width='100%' height='100%'/>
                    </div>
                    :
                    <div className="app__alarm--sound--body--media--selection">
                      {props.genre ? 
                      <div className="app__alarm--sound--body--media--selection--body">
                        {props.genre.map((song, index)=>{
                          return(
                            <div className="app__alarm--sound--body--media--selection--body--song" onClick={()=>{props.setPlayer({...props.player, url: song.url})}}>
                              <div className="app__alarm--sound--body--media--selection--body--song--name">{song.title}</div>
                              <div className="app__alarm--sound--body--media--selection--body--song--artist">{song.artist}</div>
                            </div>
                          )
                        })}
                      </div>
                      : 
                      <div className="app__alarm--sound--body--media--selection--body">Select a genre from left for a list of preset songs or enter a url below from Youtube, Soundcloud, Facebook, Vimeo, Twitch, etc.</div>}
                    </div>
                    }
                    <div className="app__alarm--sound--body--media--volume">
                        <i className="fas fa-volume-up"></i>
                        <div className="app__alarm--sound--body--media--volume--slider">
                            <input type="range" step="0.01" orient="vertical" min="0" max="1" value={props.player.volume} onChange={props.handleVolumeChange}/>
                            <div className="app__alarm--sound--body--media--volume--slider--bar"></div>
                            <div className="app__alarm--sound--body--media--volume--slider--thumb"></div>
                        </div>
                        <i className="fas fa-volume-down"></i>
                    </div>
                </div>
                <div className="app__alarm--sound--body--buttons">
                    <div className="app__alarm--sound--body--buttons--title">Custom URL:</div>
                    <div className="app__alarm--sound--body--buttons--entry">
                      <input id="url" name="url" value={props.setURL.url} onChange={props.handleURL} type='text' placeholder='Enter URL' />
                      <button onClick={()=>{props.setPlayer({...props.player, url: props.url.url})}}>Load</button>
                    </div>
                </div>
            </div>    
        </div>
    );
};