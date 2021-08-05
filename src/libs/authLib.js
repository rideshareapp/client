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
            let cookies = getCookies();
            if (cookies.REFRESH_TOKEN_VALID !== "true") {
                userIsAuthenticated(false);
                return;
            }

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

function getCookies() {
    let cookies = document.cookie.split('; ').reduce((prev, current) => {
        const [name, ...value] = current.split('=');
        prev[name] = value.join('=');
        return prev;
    }, {});
    return cookies;
}