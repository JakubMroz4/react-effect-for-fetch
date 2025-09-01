import PublicationHistoryList from "./PublicationHistoryList";

function ArtListItem({ entity, url }) {
  return (
    <li>
      ArtListItem
      <div className="frame">
        <img src={url + entity.imageURL} />
      </div>
      <h3>{entity.title}</h3>
      <p>Artist: {entity.artist}</p>
      <h4>Publication History:</h4>
      <PublicationHistoryList publications={entity.publicationHistory} />
    </li>
  );
}

export default ArtListItem;
