const getNewActiveSos = `
    select Sos.id, Sos.name, Sos.phone, Sos.location, Sos.status, ST_Distance_Sphere(POINT(ST_Y(Sos.location),ST_X(Sos.location)),POINT(:longitude, :latitude)) as distance
    from Sos
    where Sos.status='active' and Sos.id not in (select sosId from Rescudes where Rescudes.userId = :id)
    order by distance asc;
`;

module.exports = { getNewActiveSos };
