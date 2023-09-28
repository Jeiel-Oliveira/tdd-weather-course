import LocationService from "../LocationServices";

describe('LocalizationService', () => {
  test('Should return latitute e longitude from current location', async () => {
    const position = await LocationService.getCurrentPosition()
    expect(position).toEqual({
      latitude: 0,
      longitude: 0,
    })
  })
})