function generarId() : string {
    return Math.random().toString(30).substring(2) + Date.now().toString(32);
}

export default  generarId;
