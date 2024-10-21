

export function getRating(adult){
    return adult ? '청소년 불가' : '전체 관람가능'
}

export function getGenreNames (genreIds, genreMap){
    return genreIds.map(id => genreMap[id]).join(',')
}