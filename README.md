# tracking-web

A web UI for my [tracking service](https://github.com/xtul/TrackingService).

## Current features

- Live device tracking on map

## Planned features

- Device adding, removing, updating
- Viewing position history on map

## How it works
After user logs in, his JWT token and all devices he has access to are stored 
in a Vuex store. Afterwards, a connection is made to a SignalR hub. The client  
subscribes to position updates of his devices.
