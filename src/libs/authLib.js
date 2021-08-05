export default async function HandleAuth(userIsAuthenticated) {
    try {
        
        const res = await fetch(`http://127.0.0.1:9000/auth/validToken`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
        });
        if (res.ok) {
            userIsAuthenticated(true);
        } else if (res.status === 401) {
            const res = await fetch(`http://127.0.0.1:9000/auth/refresh`, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include'
            });
            if (res.ok) {
                userIsAuthenticated(true);
            } else if (res.status === 401) {
                userIsAuthenticated(false);
            }
        }
    }
    catch (err) {
        alert(err);
    }
}
