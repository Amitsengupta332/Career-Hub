
const addTodb = id => {
    let appliedJob = {}
 

    const storedJob = localStorage.getItem('applied-job')
    if (storedJob) {
        appliedJob = JSON.parse(storedJob)
    }


    
    const count = appliedJob[id]
    if (count) {
        const newCount = count + 1;
        appliedJob[id] = newCount
    } else {
        appliedJob[id] = 1;
    }

    localStorage.setItem('applied-job', JSON.stringify(appliedJob))
}
 
const getStoredJob = () => {
    let appliedJob = {}

    const storedJob = localStorage.getItem('applied-job')
    if (storedJob) {
        appliedJob = JSON.parse(storedJob)
    }
    return  appliedJob;
}

export { addTodb, getStoredJob }