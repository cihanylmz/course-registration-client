import React from 'react';
import usePermission from "./usePermission";


//Kullanımı engellenen bir component olduğunda bunu kullanırız.
const Restricted = ({to, fallback,loadingComponent, children}) => {

    const [loading, allowed] = usePermission(to);

    if(loading){
        return <>{loadingComponent}</>;
    }

    //Kullanıcı izne sahipse görüntülemeye izin verir
    if(allowed){
        return <>{children}</>;
    }

    //İzne sahip değilse izin vermez ve istediğimiz text'i gösterir.
    return <>{fallback}</>;
};

export default Restricted;
