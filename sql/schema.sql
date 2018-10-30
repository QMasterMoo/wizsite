CREATE TABLE Users (
    uid INTEGER AUTO_INCREMENT,
    username VARCHAR(24) NOT NULL,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    password VARCHAR(256) NOT NULL,
    PRIMARY KEY(uid),
    UNIQUE(username)
);

CREATE TABLE Blog (
    bid INTEGER AUTO_INCREMENT,
    author_id INTEGER NOT NULL,
    title VARCHAR(256) NOT NULL,
    visible BOOLEAN DEFAULT 0 NOT NULL,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(bid),
    FOREIGN KEY(author_id) REFERENCES Users(uid)
);

CREATE TABLE Content (
    tid INTEGER AUTO_INCREMENT,
    bid INTEGER NOT NULL,
    author_id INTEGER,
    content VARCHAR(21844),
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY(tid),
    FOREIGN KEY(bid) REFERENCES Blog(bid),
    FOREIGN KEY(author_id) REFERENCES Users(uid)
);

CREATE VIEW LatestBlogs AS (
    SELECT b.title, b.posted, c.content, c.created as edited, u.username
    FROM Blog b
    INNER JOIN (
        SELECT MAX(c.tid) as tid, c.bid
        FROM Content c
        GROUP BY c.bid
    ) lid ON b.bid = lid.bid
    INNER JOIN Content c 
    ON lid.tid = c.tid
    INNER JOIN Users u
    ON b.author_id = u.uid
    WHERE b.visible <> 0
    ORDER BY b.posted DESC
);

