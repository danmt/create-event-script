export type Decidooor = {
  "version": "0.1.0",
  "name": "decidooor",
  "instructions": [
    {
      "name": "createEvent",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "eventState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "event_state"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Event",
                "path": "event"
              }
            ]
          }
        },
        {
          "name": "eventVotes",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "event_votes"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Event",
                "path": "event"
              }
            ]
          }
        },
        {
          "name": "acceptedMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "event_vault"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Event",
                "path": "event"
              }
            ]
          }
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "redeemDate",
          "type": "i64"
        },
        {
          "name": "capacity",
          "type": "u64"
        },
        {
          "name": "eventSpace",
          "type": "u32"
        }
      ]
    },
    {
      "name": "checkIn",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "event",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "event_state"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Event",
                "path": "event"
              }
            ]
          }
        },
        {
          "name": "participant",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createProject",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "projectVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventVotes",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "event_votes"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Event",
                "path": "event"
              }
            ]
          }
        },
        {
          "name": "project",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "acceptedMint",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arguments",
          "type": {
            "defined": "CreateProjectArguments"
          }
        }
      ]
    },
    {
      "name": "vote",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "event",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventVotes",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "event_votes"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Event",
                "path": "event"
              }
            ]
          }
        },
        {
          "name": "project",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "participant",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "redeem",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "project",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "event_state"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Event",
                "path": "event"
              }
            ]
          }
        },
        {
          "name": "acceptedMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "projectVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "event_vault"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Event",
                "path": "event"
              }
            ]
          }
        },
        {
          "name": "eventVotes",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "event_votes"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Event",
                "path": "event"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "eventState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "redeemDate",
            "type": "i64"
          },
          {
            "name": "acceptedMint",
            "type": "publicKey"
          },
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "capacity",
            "type": "u64"
          },
          {
            "name": "registeredParticipants",
            "type": "u64"
          },
          {
            "name": "isRedeemed",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "eventVotes",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "votesStats",
            "type": {
              "vec": {
                "defined": "EventVotesStats"
              }
            }
          }
        ]
      }
    },
    {
      "name": "event",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bumps",
            "type": {
              "defined": "EventBumps"
            }
          }
        ]
      }
    },
    {
      "name": "participant",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "event",
            "type": "publicKey"
          },
          {
            "name": "hasVoted",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "project",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "event",
            "type": "publicKey"
          },
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "EventVotesStats",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "project",
            "type": "publicKey"
          },
          {
            "name": "votes",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "EventBumps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stateBump",
            "type": "u8"
          },
          {
            "name": "vaultBump",
            "type": "u8"
          },
          {
            "name": "votesBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "CreateProjectArguments",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidEvent",
      "msg": "Invalid event"
    },
    {
      "code": 6001,
      "name": "InvalidProject",
      "msg": "Invalid project"
    },
    {
      "code": 6002,
      "name": "AlreadyRedeemed",
      "msg": "Already redeemed"
    },
    {
      "code": 6003,
      "name": "CannotRedeemYet",
      "msg": "Cannot redeem yet"
    },
    {
      "code": 6004,
      "name": "OnlyTheWinnerCanRedeem",
      "msg": "Only the winner can redeem"
    },
    {
      "code": 6005,
      "name": "CantRedeemEmptyEvent",
      "msg": "Cant redeem empty event"
    },
    {
      "code": 6006,
      "name": "OnlyTheProjectOwnerCanRedeem",
      "msg": "Only the project owner can redeem"
    },
    {
      "code": 6007,
      "name": "UnauthorizedVote",
      "msg": "Unauthorized vote"
    },
    {
      "code": 6008,
      "name": "ParticipantAlreadyVoted",
      "msg": "Participant already voted"
    }
  ]
};

export const IDL: Decidooor = {
  "version": "0.1.0",
  "name": "decidooor",
  "instructions": [
    {
      "name": "createEvent",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "event",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "eventState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "event_state"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Event",
                "path": "event"
              }
            ]
          }
        },
        {
          "name": "eventVotes",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "event_votes"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Event",
                "path": "event"
              }
            ]
          }
        },
        {
          "name": "acceptedMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "event_vault"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Event",
                "path": "event"
              }
            ]
          }
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "redeemDate",
          "type": "i64"
        },
        {
          "name": "capacity",
          "type": "u64"
        },
        {
          "name": "eventSpace",
          "type": "u32"
        }
      ]
    },
    {
      "name": "checkIn",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "event",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "event_state"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Event",
                "path": "event"
              }
            ]
          }
        },
        {
          "name": "participant",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createProject",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "projectVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventVotes",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "event_votes"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Event",
                "path": "event"
              }
            ]
          }
        },
        {
          "name": "project",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "acceptedMint",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "arguments",
          "type": {
            "defined": "CreateProjectArguments"
          }
        }
      ]
    },
    {
      "name": "vote",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "event",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventVotes",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "event_votes"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Event",
                "path": "event"
              }
            ]
          }
        },
        {
          "name": "project",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "participant",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "redeem",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "project",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "event",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "eventState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "event_state"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Event",
                "path": "event"
              }
            ]
          }
        },
        {
          "name": "acceptedMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "projectVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "event_vault"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Event",
                "path": "event"
              }
            ]
          }
        },
        {
          "name": "eventVotes",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "event_votes"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "account": "Event",
                "path": "event"
              }
            ]
          }
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "eventState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "redeemDate",
            "type": "i64"
          },
          {
            "name": "acceptedMint",
            "type": "publicKey"
          },
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "capacity",
            "type": "u64"
          },
          {
            "name": "registeredParticipants",
            "type": "u64"
          },
          {
            "name": "isRedeemed",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "eventVotes",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "votesStats",
            "type": {
              "vec": {
                "defined": "EventVotesStats"
              }
            }
          }
        ]
      }
    },
    {
      "name": "event",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "bumps",
            "type": {
              "defined": "EventBumps"
            }
          }
        ]
      }
    },
    {
      "name": "participant",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "event",
            "type": "publicKey"
          },
          {
            "name": "hasVoted",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "project",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "event",
            "type": "publicKey"
          },
          {
            "name": "vault",
            "type": "publicKey"
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "EventVotesStats",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "project",
            "type": "publicKey"
          },
          {
            "name": "votes",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "EventBumps",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stateBump",
            "type": "u8"
          },
          {
            "name": "vaultBump",
            "type": "u8"
          },
          {
            "name": "votesBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "CreateProjectArguments",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidEvent",
      "msg": "Invalid event"
    },
    {
      "code": 6001,
      "name": "InvalidProject",
      "msg": "Invalid project"
    },
    {
      "code": 6002,
      "name": "AlreadyRedeemed",
      "msg": "Already redeemed"
    },
    {
      "code": 6003,
      "name": "CannotRedeemYet",
      "msg": "Cannot redeem yet"
    },
    {
      "code": 6004,
      "name": "OnlyTheWinnerCanRedeem",
      "msg": "Only the winner can redeem"
    },
    {
      "code": 6005,
      "name": "CantRedeemEmptyEvent",
      "msg": "Cant redeem empty event"
    },
    {
      "code": 6006,
      "name": "OnlyTheProjectOwnerCanRedeem",
      "msg": "Only the project owner can redeem"
    },
    {
      "code": 6007,
      "name": "UnauthorizedVote",
      "msg": "Unauthorized vote"
    },
    {
      "code": 6008,
      "name": "ParticipantAlreadyVoted",
      "msg": "Participant already voted"
    }
  ]
};
