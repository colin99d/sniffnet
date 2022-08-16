initSidebarItems({"fn":[["analyze_network_header","This function analyzes the network layer header passed as parameter and updates variables passed by reference on the basis of the packet header content."],["analyze_transport_header","This function analyzes the transport layer header passed as parameter and updates variables passed by reference on the basis of the packet header content."],["from_port_to_application_protocol","Given an integer in the range `0..=65535`, this function returns an `Option<AppProtocol>` containing the respective application protocol represented by a value of the `AppProtocol` enum. Only the most common application layer protocols are considered; if a unknown port number is provided, this function returns `None`."],["modify_or_insert_destination_in_map","Function to insert the destination of a packet into the shared map containing the analyzed traffic."],["modify_or_insert_source_in_map","Function to insert the source of a packet into the shared map containing the analyzed traffic."],["parse_packets_loop","The calling thread enters in a loop in which it waits for network packets, parses them according to the user specified filters, and inserts them into the shared map variable."]]});