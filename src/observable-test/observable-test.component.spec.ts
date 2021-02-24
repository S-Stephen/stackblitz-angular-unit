import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { ObserverService } from "../observer.service";
import { ObservableTestComponent } from "./observable-test.component";

describe("ObservableComponent", () => {
  let fixture;

  describe("Works: useValue method", () => {
    let obsService; // our Jasmine Spy object
    beforeEach(async () => {
      obsService = { myObs$: of(1) };
      await TestBed.configureTestingModule({
        declarations: [ObservableTestComponent],
        providers: [{ provide: ObserverService, useValue: obsService }]
      }).compileComponents();

      fixture = TestBed.createComponent(ObservableTestComponent);
    });
    it("should exist", () => {
      expect(fixture.componentInstance.variable).toBe("test");
    });
    it("Should hold value of one in observable", () => {
      fixture.componentInstance.componentObs$.subscribe(value =>
        expect(value).toBe(1)
      );
    });
  });

  describe("Fails: 2 - spyOn method as function", () => {
    let obsService; // our Jasmine Spy object
    beforeEach(async () => {
      obsService = jasmine.createSpyObj("obsservice", ["myObs$"]);
      obsService.myObs$.and.returnValue(of(2));

      await TestBed.configureTestingModule({
        declarations: [ObservableTestComponent],
        providers: [{ provide: ObserverService, useValue: obsService }]
      }).compileComponents();

      fixture = TestBed.createComponent(ObservableTestComponent);
    });
    it("Should hold value of two in observable", async () => {
      fixture.componentInstance.componentObs$.subscribe(value =>
        expect(value).toBe(2)
      );
    });
  });

  describe("Fails: 3 - spyOnProperty method as a getter", () => {
    let obsService; // our Jasmine Spy object
    beforeEach(async () => {
      obsService = jasmine.createSpyObj("obsservice", ["fake"], ["myObs$"]);
      spyOnProperty(obsService, "myObs$", "get").and.returnValue(of(3));

      await TestBed.configureTestingModule({
        declarations: [ObservableTestComponent],
        providers: [{ provide: ObserverService, useValue: obsService }]
      }).compileComponents();

      fixture = TestBed.createComponent(ObservableTestComponent);
    });
    fit("Should hold value of two in observable", async () => {
      fixture.componentInstance.componentObs$.subscribe(value =>
        expect(value).toBe(3)
      );
    });
  });

  describe("Fails: 4 - https://www.javaer101.com/en/article/18528827.html", () => {
    let obsService; // our Jasmine Spy object
    beforeEach(async () => {
      obsService = jasmine.createSpyObj("obsservice", ["fake"], ["myObs$"]);
      spyOnProperty(obsService.myObs$, "value", "get").and.returnValue(of(4));
      await TestBed.configureTestingModule({
        declarations: [ObservableTestComponent],
        providers: [{ provide: ObserverService, useValue: obsService }]
      }).compileComponents();

      fixture = TestBed.createComponent(ObservableTestComponent);
    });
    it("Should hold value of two in observable", async () => {
      fixture.componentInstance.componentObs$.subscribe(value =>
        expect(value).toBe(4)
      );
    });
  });
});
