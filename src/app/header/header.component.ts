import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  title = "Trip Memories"
  subtitle = "Never forget your memories..."
  backgroundImage = "https://lh3.googleusercontent.com/txxfXB_ghSu1V1HZg9FNPD24yHCVGnM4Eu6xtBr-5qvX4VOh4tzr7qiDEzDXbgw05tC_YAQnkuqqa5KrDTiIuH6t3BCDxAFJKITjyXqcLh5khkDTkNaoCXRYtYjo9CwfbcetLyRRJkYRfsICA9nJgxRPLd9FH9MwKNduB6xlb3i5MzYZcqvJhyCjyo8SBpyM5-pNkaH-tjhwi8smVAHuzkET2y2-4jM7VBWSK4GZap531RLp32l4dx-5cz6eAzdA4fvKQaEgWUYmlRI61F65mEkA4n50gRrMIsDbM6ENpIDThVYmDmJ0lcQdfnL6QqVrhd0gheV1RJBBUQnJfeReugvD7tW203y4LFYBXYIAarMFp_ZQEsHIrVAJppegGqlajnIcHHJGTovBe0JDQns7Wa04y--lWZAZ084GtG6-k0iucO4CT4qKCMFhgf4NNx3Qjpm3BHeTA_UiZxjxTkPwZlH_9bzREkhuitbzQ0u8lC08UmDWb-cY1wDbvf2kun1pK8_-BEYHQUFrgKWRvYaFoV24LIC1xMAKSPrgBK7omCl0Zgd_D1JHX2fgRDuRGUMf4gkyE88sRhECFp-9Rs4WazwsA-X9U6nLEwsek7-ObJd3OhDH4yMRAucYDnfDJPRosHsToecFuLHKA9gQ9Vk_12mIvJMbJjImHfJ0dRi71yRUXe8LTWKywQ=w1921-h553-no"
  constructor() { }

  ngOnInit() {
  }

}
