var mavis_utils = require('mavis-utils')

var server = new mavis_utils.mavis_local_clients.communication_server(6767, (packet) => {
    var packet_type = packet.packet
    if (packet_type.startsWith('test_')) return {packet: `${packet_type} recieved!`}
    else return {packet: `Unknown packet '${packet_type}'!`}
})