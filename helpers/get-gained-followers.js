export default function getGainedFollowers(author) {
  return author.info.followers_count - prev(author).info.followers_count);
}
