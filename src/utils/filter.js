export function filter(list) {
    return list.filter((i) => i.Value !== '' && i.Value !== '0' && i.Value !== null
    )
}