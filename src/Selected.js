import React from 'react'

function Selected({selectedItem}) {

  const fullPrice=selectedItem.reduce((acc,item)=>acc+(item.price*item.count),0)
  return (
    <div>
      <hr />

<h1>items which selected</h1>
      {selectedItem?.map(item=>(<div>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <img src={item.image} alt={item.image}  width={120} height={120}/>
        <p>{item.count}</p>
      </div>))}



<div>
<h2>full price</h2>

{fullPrice}
</div>

      </div>
  )
}

export default Selected