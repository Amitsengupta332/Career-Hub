//  add to local storage 

const addTodb = id => {
    let appliedJob = {}
    // localStorage.setItem('applied-job',id)

    const storedJob = localStorage.getItem('applied-job')
    if (storedJob) {
        appliedJob = JSON.parse(storedJob)
    }


    // add quantity
    const count = appliedJob[id]
    if (count) {
        const newCount = count + 1;
        appliedJob[id] = newCount
    } else {
        appliedJob[id] = 1;
    }

    localStorage.setItem('applied-job', JSON.stringify(appliedJob))
}
// get stored data from the cart
const getStoredJob = () => {
    let appliedJob = {}

    const storedJob = localStorage.getItem('applied-job')
    if (storedJob) {
        appliedJob = JSON.parse(storedJob)
    }
    return  appliedJob;
}

export { addTodb, getStoredJob }