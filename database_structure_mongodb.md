
# Collections:


1. `users`
    - `_id` (ObjectId): unique user ID
    - `username`: string
    - `email`: string
    - `password`: string (hashed)
    - `name`: string
    - `profilePicture`: Binary Data
    - `headerImage`: Binary Data
    - `bio`: string
    - `created_at`: Date
    - `updated_at`: Date

2. `chirps`
    - `_id` (ObjectId): unique Chirp ID
    - `user_id` (ObjectId): reference to users collection
    - `content`: string
    - `image`: Binary Data
    - `created_at`: Date
    - `updated_at`: Date

3. `follows`
    - `_id` (ObjectId): unique follow ID
    - `user_id` (ObjectId): reference to users collection
    - `follows_user_id` (ObjectId): reference to users collection
    - `created_at`: Date

4. `mentions`
    - `_id` (ObjectId): unique mention ID
    - `chirp_id` (ObjectId): reference to chirps collection
    - `user_id` (ObjectId): reference to users collection
    - `created_at`: Date

5. `hashtags`
    - `_id` (ObjectId): unique hashtag ID
    - `name`: string
    - `created_at`: Date

6. `chirp_hashtags`
    - `_id` (ObjectId): unique Chirp-hashtag ID
    - `chirp_id` (ObjectId): reference to chirps collection
    - `hashtag_id` (ObjectId): reference to hashtags collection
    - `created_at`: Date

7. `direct_messages`
    - `_id` (ObjectId): unique direct message ID
    - `sender_id` (ObjectId): reference to users collection
    - `recipient_id` (ObjectId): reference to users collection
    - `content`: string
    - `created_at`: Date

8. `reactions`
    - `_id` (ObjectId): unique reaction ID
    - `chirp_id` (ObjectId): reference to chirps collection
    - `user_id` (ObjectId): reference to users collection
    - `reaction_type`: string (e.g., "like", "love")
    - `created_at`: Date

# MongoDB Indexes:

- `users`: `{ username: 1 }, { email: 1 }`
- `chirps`: `{ user_id: 1 }, { created_at: 1 }`
- `follows`: `{ user_id: 1 }, { follows_user_id: 1 }`
- `mentions`: `{ chirp_id: 1 }, { user_id: 1 }`
- `hashtags`: `{ name: 1 }`
- `chirp_hashtags`: `{ chirp_id: 1 }, { hashtag_id: 1 }`
- `direct_messages`: `{ sender_id: 1 }, { recipient_id: 1 }`
- `reactions`: `{ chirp_id: 1 }, { user_id: 1 }`