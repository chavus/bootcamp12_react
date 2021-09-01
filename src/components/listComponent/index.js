export default function listComponent(myprop){
    return(
        <ul>
          {
            myprop.namesArray.map((item, index)=>{
              return <li key={index}>{item}</li>
            })
          }
        </ul>
    )
}