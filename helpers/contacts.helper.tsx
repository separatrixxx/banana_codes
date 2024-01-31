export function checkContacts(name: string, email: string, phone: string, message: string,
    setErrorName: (e: any) => void, setErrorEmail: (e: any) => void, setErrorPhone: (e: any) => void,
    setErrorMessage: (e: any) => void, setLoading: (e: any) => void, router: any) {
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const PHONE_REGEXP = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/iu;

    setErrorName(false);
    setErrorEmail(false);
    setErrorPhone(false);
    setErrorMessage(false);

    if (+name !== 0 && EMAIL_REGEXP.test(email) && PHONE_REGEXP.test(phone) && +message !== 0) {
        if (name !== null && email !== null && phone !== null && message !== null) {
            setLoading(true);

            setTimeout(() => setLoading(false), 3000);
        }
    } else {
        if (+name === 0) {
            setErrorName(true);
        }

        if (!EMAIL_REGEXP.test(email)) {
            setErrorEmail(true);
        }

        if (!PHONE_REGEXP.test(phone)) {
            setErrorPhone(true);
        }

        if (+message === 0) {
            setErrorMessage(true);
        }
    }
    
}
