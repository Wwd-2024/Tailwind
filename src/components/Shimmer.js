

const Shimmer = () =>{

    const style= {
        backgroundColor: 'rgba(244, 198, 182, 0.21)',
        border: '0px',
        width: '300px',
        height: '65px',
        borderRadius: '50%'
    };

    return (
        <div className="body">
        <div className="shimmer-toolbar">
              <button style={style} ></button>
             <div style={{width:'95%','backgroundColor':'#f4c6b636', height:'63%'}}></div>
        </div>
        
         <div className="shimmer-container">
             <div className="shimmer-card"></div>
             <div className="shimmer-card"></div>
             <div className="shimmer-card"></div>
             <div className="shimmer-card"></div>
             <div className="shimmer-card"></div>
             <div className="shimmer-card"></div>   
              <div className="shimmer-card"></div>
              <div className="shimmer-card"></div>
             <div className="shimmer-card"></div>
             <div className="shimmer-card"></div>
             <div className="shimmer-card"></div>
             <div className="shimmer-card"></div>
             <div className="shimmer-card"></div>   
              <div className="shimmer-card"></div>
        
         </div>

        </div>

    )
}

export default Shimmer;