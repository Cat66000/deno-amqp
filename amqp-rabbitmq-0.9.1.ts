export const spec = {
  name: "AMQP",
  "major-version": 0,
  "minor-version": 9,
  revision: 1,
  port: 5672,
  copyright: [
    "Copyright (C) 2008-2019 Pivotal Software, Inc, Inc.\n",
    "\n",
    "Permission is hereby granted, free of charge, to any person\n",
    'obtaining a copy of this file (the "Software"), to deal in the\n',
    "Software without restriction, including without limitation the \n",
    "rights to use, copy, modify, merge, publish, distribute, \n",
    "sublicense, and/or sell copies of the Software, and to permit \n",
    "persons to whom the Software is furnished to do so, subject to \n",
    "the following conditions:\n",
    "\n",
    "The above copyright notice and this permission notice shall be\n",
    "included in all copies or substantial portions of the Software.\n",
    "\n",
    'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,\n',
    "EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES\n",
    "OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n",
    "NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT\n",
    "HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\n",
    "WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n",
    "FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR\n",
    "OTHER DEALINGS IN THE SOFTWARE.\n",
    "\n",
    "Class information entered from amqp_xml0-8.pdf and domain types from amqp-xml-doc0-9.pdf\n",
    "Updated for 0-9-1 by Tony Garnock-Jones\n",
    "\n",
    "b3cb053f15e7b98808c0ccc67f23cb3e  amqp_xml0-8.pdf\n",
    "http://twiststandards.org/?option=com_docman&task=cat_view&gid=28&Itemid=90\n",
    "8444db91e2949dbecfb2585e9eef6d64  amqp-xml-doc0-9.pdf\n",
    "https://jira.amqp.org/confluence/download/attachments/720900/amqp-xml-doc0-9.pdf?version=1\n"
  ],
  domains: [
    ["bit", "bit"],
    ["channel-id", "longstr"],
    ["class-id", "short"],
    ["consumer-tag", "shortstr"],
    ["delivery-tag", "longlong"],
    ["destination", "shortstr"],
    ["duration", "longlong"],
    ["exchange-name", "shortstr"],
    ["long", "long"],
    ["longlong", "longlong"],
    ["longstr", "longstr"],
    ["method-id", "short"],
    ["no-ack", "bit"],
    ["no-local", "bit"],
    ["octet", "octet"],
    ["offset", "longlong"],
    ["path", "shortstr"],
    ["peer-properties", "table"],
    ["queue-name", "shortstr"],
    ["redelivered", "bit"],
    ["reference", "longstr"],
    ["reject-code", "short"],
    ["reject-text", "shortstr"],
    ["reply-code", "short"],
    ["reply-text", "shortstr"],
    ["security-token", "longstr"],
    ["short", "short"],
    ["shortstr", "shortstr"],
    ["table", "table"],
    ["timestamp", "timestamp"]
  ],
  constants: [
    {
      name: "FRAME-METHOD",
      value: 1
    },
    {
      name: "FRAME-HEADER",
      value: 2
    },
    {
      name: "FRAME-BODY",
      value: 3
    },
    {
      name: "FRAME-HEARTBEAT",
      value: 8
    },
    {
      name: "FRAME-MIN-SIZE",
      value: 4096
    },
    {
      name: "FRAME-END",
      value: 206
    },
    {
      name: "REPLY-SUCCESS",
      value: 200
    },
    {
      name: "CONTENT-TOO-LARGE",
      value: 311,
      class: "soft-error"
    },
    {
      name: "NO-ROUTE",
      value: 312,
      class: "soft-error"
    },
    {
      name: "NO-CONSUMERS",
      value: 313,
      class: "soft-error"
    },
    {
      name: "ACCESS-REFUSED",
      value: 403,
      class: "soft-error"
    },
    {
      name: "NOT-FOUND",
      value: 404,
      class: "soft-error"
    },
    {
      name: "RESOURCE-LOCKED",
      value: 405,
      class: "soft-error"
    },
    {
      name: "PRECONDITION-FAILED",
      value: 406,
      class: "soft-error"
    },
    {
      name: "CONNECTION-FORCED",
      value: 320,
      class: "hard-error"
    },
    {
      name: "INVALID-PATH",
      value: 402,
      class: "hard-error"
    },
    {
      name: "FRAME-ERROR",
      value: 501,
      class: "hard-error"
    },
    {
      name: "SYNTAX-ERROR",
      value: 502,
      class: "hard-error"
    },
    {
      name: "COMMAND-INVALID",
      value: 503,
      class: "hard-error"
    },
    {
      name: "CHANNEL-ERROR",
      value: 504,
      class: "hard-error"
    },
    {
      name: "UNEXPECTED-FRAME",
      value: 505,
      class: "hard-error"
    },
    {
      name: "RESOURCE-ERROR",
      value: 506,
      class: "hard-error"
    },
    {
      name: "NOT-ALLOWED",
      value: 530,
      class: "hard-error"
    },
    {
      name: "NOT-IMPLEMENTED",
      value: 540,
      class: "hard-error"
    },
    {
      name: "INTERNAL-ERROR",
      value: 541,
      class: "hard-error"
    }
  ],
  classes: [
    {
      id: 10,
      methods: [
        {
          id: 10,
          arguments: [
            {
              type: "octet",
              name: "version-major",
              "default-value": 0
            },
            {
              type: "octet",
              name: "version-minor",
              "default-value": 9
            },
            {
              domain: "peer-properties",
              name: "server-properties"
            },
            {
              type: "longstr",
              name: "mechanisms",
              "default-value": "PLAIN"
            },
            {
              type: "longstr",
              name: "locales",
              "default-value": "en_US"
            }
          ],
          name: "start",
          synchronous: true
        },
        {
          id: 11,
          arguments: [
            {
              domain: "peer-properties",
              name: "client-properties"
            },
            {
              type: "shortstr",
              name: "mechanism",
              "default-value": "PLAIN"
            },
            {
              type: "longstr",
              name: "response"
            },
            {
              type: "shortstr",
              name: "locale",
              "default-value": "en_US"
            }
          ],
          name: "start-ok"
        },
        {
          id: 20,
          arguments: [
            {
              type: "longstr",
              name: "challenge"
            }
          ],
          name: "secure",
          synchronous: true
        },
        {
          id: 21,
          arguments: [
            {
              type: "longstr",
              name: "response"
            }
          ],
          name: "secure-ok"
        },
        {
          id: 30,
          arguments: [
            {
              type: "short",
              name: "channel-max",
              "default-value": 0
            },
            {
              type: "long",
              name: "frame-max",
              "default-value": 0
            },
            {
              type: "short",
              name: "heartbeat",
              "default-value": 0
            }
          ],
          name: "tune",
          synchronous: true
        },
        {
          id: 31,
          arguments: [
            {
              type: "short",
              name: "channel-max",
              "default-value": 0
            },
            {
              type: "long",
              name: "frame-max",
              "default-value": 0
            },
            {
              type: "short",
              name: "heartbeat",
              "default-value": 0
            }
          ],
          name: "tune-ok"
        },
        {
          id: 40,
          arguments: [
            {
              type: "shortstr",
              name: "virtual-host",
              "default-value": "/"
            },
            {
              type: "shortstr",
              name: "capabilities",
              "default-value": ""
            },
            {
              type: "bit",
              name: "insist",
              "default-value": false
            }
          ],
          name: "open",
          synchronous: true
        },
        {
          id: 41,
          arguments: [
            {
              type: "shortstr",
              name: "known-hosts",
              "default-value": ""
            }
          ],
          name: "open-ok"
        },
        {
          id: 50,
          arguments: [
            {
              type: "short",
              name: "reply-code"
            },
            {
              type: "shortstr",
              name: "reply-text",
              "default-value": ""
            },
            {
              type: "short",
              name: "class-id"
            },
            {
              type: "short",
              name: "method-id"
            }
          ],
          name: "close",
          synchronous: true
        },
        {
          id: 51,
          arguments: [],
          name: "close-ok"
        },
        {
          id: 60,
          arguments: [
            {
              type: "shortstr",
              name: "reason",
              "default-value": ""
            }
          ],
          name: "blocked"
        },
        {
          id: 61,
          arguments: [],
          name: "unblocked"
        },
        {
          id: 70,
          arguments: [
            {
              type: "longstr",
              name: "new-secret"
            },
            {
              type: "shortstr",
              name: "reason"
            }
          ],
          name: "update-secret",
          synchronous: true
        },
        {
          id: 71,
          arguments: [],
          name: "update-secret-ok"
        }
      ],
      name: "connection",
      properties: []
    },
    {
      id: 20,
      methods: [
        {
          id: 10,
          arguments: [
            {
              type: "shortstr",
              name: "out-of-band",
              "default-value": ""
            }
          ],
          name: "open",
          synchronous: true
        },
        {
          id: 11,
          arguments: [
            {
              type: "longstr",
              name: "channel-id",
              "default-value": ""
            }
          ],
          name: "open-ok"
        },
        {
          id: 20,
          arguments: [
            {
              type: "bit",
              name: "active"
            }
          ],
          name: "flow",
          synchronous: true
        },
        {
          id: 21,
          arguments: [
            {
              type: "bit",
              name: "active"
            }
          ],
          name: "flow-ok"
        },
        {
          id: 40,
          arguments: [
            {
              type: "short",
              name: "reply-code"
            },
            {
              type: "shortstr",
              name: "reply-text",
              "default-value": ""
            },
            {
              type: "short",
              name: "class-id"
            },
            {
              type: "short",
              name: "method-id"
            }
          ],
          name: "close",
          synchronous: true
        },
        {
          id: 41,
          arguments: [],
          name: "close-ok"
        }
      ],
      name: "channel"
    },
    {
      id: 30,
      methods: [
        {
          id: 10,
          arguments: [
            {
              type: "shortstr",
              name: "realm",
              "default-value": "/data"
            },
            {
              type: "bit",
              name: "exclusive",
              "default-value": false
            },
            {
              type: "bit",
              name: "passive",
              "default-value": true
            },
            {
              type: "bit",
              name: "active",
              "default-value": true
            },
            {
              type: "bit",
              name: "write",
              "default-value": true
            },
            {
              type: "bit",
              name: "read",
              "default-value": true
            }
          ],
          name: "request",
          synchronous: true
        },
        {
          id: 11,
          arguments: [
            {
              type: "short",
              name: "ticket",
              "default-value": 1
            }
          ],
          name: "request-ok"
        }
      ],
      name: "access"
    },
    {
      id: 40,
      methods: [
        {
          id: 10,
          arguments: [
            {
              type: "short",
              name: "ticket",
              "default-value": 0
            },
            {
              type: "shortstr",
              name: "exchange"
            },
            {
              type: "shortstr",
              name: "type",
              "default-value": "direct"
            },
            {
              type: "bit",
              name: "passive",
              "default-value": false
            },
            {
              type: "bit",
              name: "durable",
              "default-value": false
            },
            {
              type: "bit",
              name: "auto-delete",
              "default-value": false
            },
            {
              type: "bit",
              name: "internal",
              "default-value": false
            },
            {
              type: "bit",
              name: "nowait",
              "default-value": false
            },
            {
              type: "table",
              name: "arguments",
              "default-value": {}
            }
          ],
          name: "declare",
          synchronous: true
        },
        {
          id: 11,
          arguments: [],
          name: "declare-ok"
        },
        {
          id: 20,
          arguments: [
            {
              type: "short",
              name: "ticket",
              "default-value": 0
            },
            {
              type: "shortstr",
              name: "exchange"
            },
            {
              type: "bit",
              name: "if-unused",
              "default-value": false
            },
            {
              type: "bit",
              name: "nowait",
              "default-value": false
            }
          ],
          name: "delete",
          synchronous: true
        },
        {
          id: 21,
          arguments: [],
          name: "delete-ok"
        },
        {
          id: 30,
          arguments: [
            {
              type: "short",
              name: "ticket",
              "default-value": 0
            },
            {
              type: "shortstr",
              name: "destination"
            },
            {
              type: "shortstr",
              name: "source"
            },
            {
              type: "shortstr",
              name: "routing-key",
              "default-value": ""
            },
            {
              type: "bit",
              name: "nowait",
              "default-value": false
            },
            {
              type: "table",
              name: "arguments",
              "default-value": {}
            }
          ],
          name: "bind",
          synchronous: true
        },
        {
          id: 31,
          arguments: [],
          name: "bind-ok"
        },
        {
          id: 40,
          arguments: [
            {
              type: "short",
              name: "ticket",
              "default-value": 0
            },
            {
              type: "shortstr",
              name: "destination"
            },
            {
              type: "shortstr",
              name: "source"
            },
            {
              type: "shortstr",
              name: "routing-key",
              "default-value": ""
            },
            {
              type: "bit",
              name: "nowait",
              "default-value": false
            },
            {
              type: "table",
              name: "arguments",
              "default-value": {}
            }
          ],
          name: "unbind",
          synchronous: true
        },
        {
          id: 51,
          arguments: [],
          name: "unbind-ok"
        }
      ],
      name: "exchange"
    },
    {
      id: 50,
      methods: [
        {
          id: 10,
          arguments: [
            {
              type: "short",
              name: "ticket",
              "default-value": 0
            },
            {
              type: "shortstr",
              name: "queue",
              "default-value": ""
            },
            {
              type: "bit",
              name: "passive",
              "default-value": false
            },
            {
              type: "bit",
              name: "durable",
              "default-value": false
            },
            {
              type: "bit",
              name: "exclusive",
              "default-value": false
            },
            {
              type: "bit",
              name: "auto-delete",
              "default-value": false
            },
            {
              type: "bit",
              name: "nowait",
              "default-value": false
            },
            {
              type: "table",
              name: "arguments",
              "default-value": {}
            }
          ],
          name: "declare",
          synchronous: true
        },
        {
          id: 11,
          arguments: [
            {
              type: "shortstr",
              name: "queue"
            },
            {
              type: "long",
              name: "message-count"
            },
            {
              type: "long",
              name: "consumer-count"
            }
          ],
          name: "declare-ok"
        },
        {
          id: 20,
          arguments: [
            {
              type: "short",
              name: "ticket",
              "default-value": 0
            },
            {
              type: "shortstr",
              name: "queue",
              "default-value": ""
            },
            {
              type: "shortstr",
              name: "exchange"
            },
            {
              type: "shortstr",
              name: "routing-key",
              "default-value": ""
            },
            {
              type: "bit",
              name: "nowait",
              "default-value": false
            },
            {
              type: "table",
              name: "arguments",
              "default-value": {}
            }
          ],
          name: "bind",
          synchronous: true
        },
        {
          id: 21,
          arguments: [],
          name: "bind-ok"
        },
        {
          id: 30,
          arguments: [
            {
              type: "short",
              name: "ticket",
              "default-value": 0
            },
            {
              type: "shortstr",
              name: "queue",
              "default-value": ""
            },
            {
              type: "bit",
              name: "nowait",
              "default-value": false
            }
          ],
          name: "purge",
          synchronous: true
        },
        {
          id: 31,
          arguments: [
            {
              type: "long",
              name: "message-count"
            }
          ],
          name: "purge-ok"
        },
        {
          id: 40,
          arguments: [
            {
              type: "short",
              name: "ticket",
              "default-value": 0
            },
            {
              type: "shortstr",
              name: "queue",
              "default-value": ""
            },
            {
              type: "bit",
              name: "if-unused",
              "default-value": false
            },
            {
              type: "bit",
              name: "if-empty",
              "default-value": false
            },
            {
              type: "bit",
              name: "nowait",
              "default-value": false
            }
          ],
          name: "delete",
          synchronous: true
        },
        {
          id: 41,
          arguments: [
            {
              type: "long",
              name: "message-count"
            }
          ],
          name: "delete-ok"
        },
        {
          id: 50,
          arguments: [
            {
              type: "short",
              name: "ticket",
              "default-value": 0
            },
            {
              type: "shortstr",
              name: "queue",
              "default-value": ""
            },
            {
              type: "shortstr",
              name: "exchange"
            },
            {
              type: "shortstr",
              name: "routing-key",
              "default-value": ""
            },
            {
              type: "table",
              name: "arguments",
              "default-value": {}
            }
          ],
          name: "unbind",
          synchronous: true
        },
        {
          id: 51,
          arguments: [],
          name: "unbind-ok"
        }
      ],
      name: "queue"
    },
    {
      id: 60,
      methods: [
        {
          id: 10,
          arguments: [
            {
              type: "long",
              name: "prefetch-size",
              "default-value": 0
            },
            {
              type: "short",
              name: "prefetch-count",
              "default-value": 0
            },
            {
              type: "bit",
              name: "global",
              "default-value": false
            }
          ],
          name: "qos",
          synchronous: true
        },
        {
          id: 11,
          arguments: [],
          name: "qos-ok"
        },
        {
          id: 20,
          arguments: [
            {
              domain: "short",
              name: "ticket",
              "default-value": 0
            },
            {
              type: "shortstr",
              name: "queue",
              "default-value": ""
            },
            {
              type: "shortstr",
              name: "consumer-tag",
              "default-value": ""
            },
            {
              type: "bit",
              name: "no-local",
              "default-value": false
            },
            {
              type: "bit",
              name: "no-ack",
              "default-value": false
            },
            {
              type: "bit",
              name: "exclusive",
              "default-value": false
            },
            {
              type: "bit",
              name: "nowait",
              "default-value": false
            },
            {
              type: "table",
              name: "arguments",
              "default-value": {}
            }
          ],
          name: "consume",
          synchronous: true
        },
        {
          id: 21,
          arguments: [
            {
              type: "shortstr",
              name: "consumer-tag"
            }
          ],
          name: "consume-ok"
        },
        {
          id: 30,
          arguments: [
            {
              type: "shortstr",
              name: "consumer-tag"
            },
            {
              type: "bit",
              name: "nowait",
              "default-value": false
            }
          ],
          name: "cancel",
          synchronous: true
        },
        {
          id: 31,
          arguments: [
            {
              type: "shortstr",
              name: "consumer-tag"
            }
          ],
          name: "cancel-ok"
        },
        {
          content: true,
          id: 40,
          arguments: [
            {
              type: "short",
              name: "ticket",
              "default-value": 0
            },
            {
              type: "shortstr",
              name: "exchange",
              "default-value": ""
            },
            {
              type: "shortstr",
              name: "routing-key",
              "default-value": ""
            },
            {
              type: "bit",
              name: "mandatory",
              "default-value": false
            },
            {
              type: "bit",
              name: "immediate",
              "default-value": false
            }
          ],
          name: "publish"
        },
        {
          content: true,
          id: 50,
          arguments: [
            {
              type: "short",
              name: "reply-code"
            },
            {
              type: "shortstr",
              name: "reply-text",
              "default-value": ""
            },
            {
              type: "shortstr",
              name: "exchange"
            },
            {
              type: "shortstr",
              name: "routing-key"
            }
          ],
          name: "return"
        },
        {
          content: true,
          id: 60,
          arguments: [
            {
              type: "shortstr",
              name: "consumer-tag"
            },
            {
              type: "longlong",
              name: "delivery-tag"
            },
            {
              type: "bit",
              name: "redelivered",
              "default-value": false
            },
            {
              type: "shortstr",
              name: "exchange"
            },
            {
              type: "shortstr",
              name: "routing-key"
            }
          ],
          name: "deliver"
        },
        {
          id: 70,
          arguments: [
            {
              type: "short",
              name: "ticket",
              "default-value": 0
            },
            {
              type: "shortstr",
              name: "queue",
              "default-value": ""
            },
            {
              type: "bit",
              name: "no-ack",
              "default-value": false
            }
          ],
          name: "get",
          synchronous: true
        },
        {
          content: true,
          id: 71,
          arguments: [
            {
              type: "longlong",
              name: "delivery-tag"
            },
            {
              type: "bit",
              name: "redelivered",
              "default-value": false
            },
            {
              type: "shortstr",
              name: "exchange"
            },
            {
              type: "shortstr",
              name: "routing-key"
            },
            {
              type: "long",
              name: "message-count"
            }
          ],
          name: "get-ok"
        },
        {
          id: 72,
          arguments: [
            {
              type: "shortstr",
              name: "cluster-id",
              "default-value": ""
            }
          ],
          name: "get-empty"
        },
        {
          id: 80,
          arguments: [
            {
              type: "longlong",
              name: "delivery-tag",
              "default-value": 0
            },
            {
              type: "bit",
              name: "multiple",
              "default-value": false
            }
          ],
          name: "ack"
        },
        {
          id: 90,
          arguments: [
            {
              type: "longlong",
              name: "delivery-tag"
            },
            {
              type: "bit",
              name: "requeue",
              "default-value": true
            }
          ],
          name: "reject"
        },
        {
          id: 100,
          arguments: [
            {
              type: "bit",
              name: "requeue",
              "default-value": false
            }
          ],
          name: "recover-async"
        },
        {
          id: 110,
          arguments: [
            {
              type: "bit",
              name: "requeue",
              "default-value": false
            }
          ],
          name: "recover",
          synchronous: true
        },
        {
          id: 111,
          arguments: [],
          name: "recover-ok"
        },
        {
          id: 120,
          arguments: [
            {
              type: "longlong",
              name: "delivery-tag",
              "default-value": 0
            },
            {
              type: "bit",
              name: "multiple",
              "default-value": false
            },
            {
              type: "bit",
              name: "requeue",
              "default-value": true
            }
          ],
          name: "nack"
        }
      ],
      name: "basic",
      properties: [
        {
          type: "shortstr",
          name: "content-type"
        },
        {
          type: "shortstr",
          name: "content-encoding"
        },
        {
          type: "table",
          name: "headers"
        },
        {
          type: "octet",
          name: "delivery-mode"
        },
        {
          type: "octet",
          name: "priority"
        },
        {
          type: "shortstr",
          name: "correlation-id"
        },
        {
          type: "shortstr",
          name: "reply-to"
        },
        {
          type: "shortstr",
          name: "expiration"
        },
        {
          type: "shortstr",
          name: "message-id"
        },
        {
          type: "timestamp",
          name: "timestamp"
        },
        {
          type: "shortstr",
          name: "type"
        },
        {
          type: "shortstr",
          name: "user-id"
        },
        {
          type: "shortstr",
          name: "app-id"
        },
        {
          type: "shortstr",
          name: "cluster-id"
        }
      ]
    },
    {
      id: 90,
      methods: [
        {
          id: 10,
          arguments: [],
          name: "select",
          synchronous: true
        },
        {
          id: 11,
          arguments: [],
          name: "select-ok"
        },
        {
          id: 20,
          arguments: [],
          name: "commit",
          synchronous: true
        },
        {
          id: 21,
          arguments: [],
          name: "commit-ok"
        },
        {
          id: 30,
          arguments: [],
          name: "rollback",
          synchronous: true
        },
        {
          id: 31,
          arguments: [],
          name: "rollback-ok"
        }
      ],
      name: "tx"
    },
    {
      id: 85,
      methods: [
        {
          id: 10,
          arguments: [
            {
              type: "bit",
              name: "nowait",
              "default-value": false
            }
          ],
          name: "select",
          synchronous: true
        },
        {
          id: 11,
          arguments: [],
          name: "select-ok"
        }
      ],
      name: "confirm"
    }
  ]
};
