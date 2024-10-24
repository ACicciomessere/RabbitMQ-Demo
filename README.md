# RabbitMQ-Demo

Run RabbitMQ server:
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:4.0-management

# Basic Example:
    cd logsExample-routing/basicExample
    node myreceiver.js
    node mysender.js

# Direct Exchange:
    cd logsExample-routing/directExchange
    node receive_log_direct.js queues
    node emit_log_direct.js queue_to_send 

# Pub Sub:
    cd logsExample-routing/pubSub\ \(fanout\)
    node receive_log.js
    node emit_log.js

# Topic:
    cd logsExample-routing/topic\ \(filtering\)
    node receive_logs_topic.js topic
    node emit_log_topic.js topic

# Working Queue:
    cd logsExample-routing/workingQueue
    node worker.js
    node new_task.js task

# RPC Example:
    cd rpcExample
    node rpc_server.js
    node rpc_client.js 40