export async function loadPosts() {
    // const res = await fetch('https://.../posts/')
    // const data = await res.json()
    const data = [{
        id: 1, title: '첫글', description: '야호', slug: '안녕'
    }, {
        id: 2, title: '두번째글', description: '야아아호', slug: '반가워'
    }]
    
    return data
}
