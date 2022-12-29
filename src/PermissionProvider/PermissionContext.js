import React from 'react';



// Default behaviour for the Permission Provider Context
// i.e. if for whatever reason the consumer is used outside of a provider
// The permission will not be granted if no provider says otherwise
const defaultBehaviour = {
    isAllowedTo: () => Promise.resolve(false)
}

// Create the context
const PermissionContext = React.createContext( defaultBehaviour);

export default PermissionContext;
