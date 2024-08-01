package findmybmw.backend.controller;

import findmybmw.backend.model.Bmw;
import findmybmw.backend.repository.BmwRepository;
import findmybmw.backend.repository.UserRepository;
import findmybmw.backend.request.JwtResponse;
import findmybmw.backend.request.LoginRequest;
import findmybmw.backend.security.JwtUtils;
import findmybmw.backend.service.UserDetailsImpl;
import jakarta.validation.Valid;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/")
public class ResultController {

    private List<Integer> priceRange;
    private List<Bmw> RecoRes;

    private List<Map.Entry<String,Double>> entryList = new ArrayList<>();


    @Autowired
    BmwRepository bmwRepository;

    @PostMapping("/reset")
    public ResponseEntity<?> handleReset(@RequestBody List<Integer> requestBody) {
        this.priceRange = requestBody;
        System.out.println("Updated price range: " + priceRange);
        Map<String, List<Integer>> response = new HashMap<>();
        response.put("priceRange" ,priceRange);

        List<Bmw> res = new ArrayList<>();

        for(Map.Entry<String, Double> entry : entryList) {
            String model = entry.getKey();
            double sum = entry.getValue();
            Bmw bmw = bmwRepository.findByModel(model);
            if(bmw != null && bmw.getPrice() >= priceRange.get(0) && bmw.getPrice() <= priceRange.get(1)) {
                res.add(bmw);
            }
        }

        System.out.println(res);
// Limit to the first 3 elements
        List<Bmw> limitedRes = res.size() > 3 ? res.subList(0, 3) : res;

        this.RecoRes = limitedRes;
        System.out.println(limitedRes);
        return ResponseEntity.ok(RecoRes);
    }


    @PostMapping("/price")
    public Map<String, List<Integer>> setPrice(@RequestBody List<Integer> requestBody) {
        this.priceRange = requestBody;
        System.out.println("Received price range: " + priceRange);

        Map<String, List<Integer>> response = new HashMap<>();
        response.put("priceRange", priceRange);
        return response;
    }

    @GetMapping("/price")
    public Map<String, List<Integer>> getPrice() {
        Map<String, List<Integer>> response = new HashMap<>();
        response.put("priceRange", priceRange);
        return response;
    }

    @GetMapping("/data")
    public ResponseEntity<?> handleResult() {
        System.out.println(RecoRes);

        return ResponseEntity.ok(RecoRes);
    }

    @PostMapping("/process")
    public ResponseEntity<?> handleJson(@RequestBody List<List<Integer>> qData) {

        System.out.println(qData);
        List<Bmw> bmwlist = bmwRepository.findAll();

        List<Double> sumList = new ArrayList<>(75);
        for (int i = 0; i < 75; i++) {
            sumList.add(0.0);
        }

        // Fetch all column values
        List<String> modelsList = bmwRepository.findAllModels();
        List<Double> priceList = bmwRepository.findAllPrices();
        List<Integer> salesList = bmwRepository.findAllSales();
        List<Integer> performanceList = bmwRepository.findAllEngine2s();
        List<Double> fe2List = bmwRepository.findAllFe2s();
        List<Integer> designList = bmwRepository.findAllDesigns();
        List<Double> legroomList = bmwRepository.findAllLegs();
        List<Double> trunk2List = bmwRepository.findAllTrunk2s();
        List<Double> trunk1List = bmwRepository.findAllTrunk1s();

        // Normalize values for each column
        List<Double> normalizedPrices = normalize(priceList);
        List<Double> normalizedSales = normalize(salesList);
        List<Double> normalizedPerformances = normalize(performanceList);
        List<Double> normalizedFe2s = normalize(fe2List);
        List<Double> normalizedDesigns = normalize(designList);
        List<Double> normalizedLegrooms = normalize(legroomList);
        List<Double> normalizedTrunk = normalize(trunk2List);


        // Calculate sum of trunk spaces and legroomm
        // What's the difference between ArrayList and List?
        List<Double> spaceList = new ArrayList<>();
        for (int i = 0; i < trunk1List.size(); i++) {
            spaceList.add(trunk1List.get(i) + trunk2List.get(i) + normalizedLegrooms.get(i));
        }

        // Find max value in spaceList
        double maxSpace = spaceList.stream().max(Double::compare).orElse(1.0); // Avoid division by zero

        // Normalize the spaceList values
        List<Double> normSpace = spaceList.stream()
                .map(e -> round(e / maxSpace, 3))
                .collect(Collectors.toList());

        // What's the difference between Map and Hashmap??
        Map<String, Double> result = new HashMap<>();
        for (String model : modelsList) {
            result.put(model, 0.0);
        }
        for(Double e: priceList) {
            System.out.println(e);
        }

        for (int i = 0; i < qData.size(); i++) {
            for (int j = 0; j < qData.get(i).size(); j++) {

                if (i == 0) {
                    // Question 1
                    if (qData.get(0).get(0) == 5) {
                        System.out.println("Customizability");
                        updateSumList(sumList, normalizedDesigns, 3);
                    }
                    if (qData.get(0).get(0) == 4) {
                        System.out.println("Customizability");
                        updateSumList(sumList, normalizedDesigns, 2);
                    }
                    if (qData.get(0).get(0) == 3) {
                        System.out.println("Customizability");
                        updateSumList(sumList, normalizedDesigns, 2);
                    }
                    if (qData.get(0).get(1) == 5) {
                        System.out.println("Performance");
                        updateSumList(sumList, normalizedPerformances, 3);
                    }
                    if (qData.get(0).get(1) == 4) {
                        System.out.println("Performance");
                        updateSumList(sumList, normalizedPerformances, 2);
                    }
                    if (qData.get(0).get(1) == 3) {
                        System.out.println("Performance");
                        updateSumList(sumList, normalizedPerformances, 3);
                    }
                    if (qData.get(0).get(2) == 5) {
                        System.out.println("Space");
                        updateSumList(sumList, normSpace, 3);
                    }
                    if (qData.get(0).get(2) == 4) {
                        System.out.println("Space");
                        updateSumList(sumList, normSpace, 2);
                    }
                    if (qData.get(0).get(2) == 3) {
                        System.out.println("Space");
                        updateSumList(sumList, normSpace, 3);
                    }
                    if (qData.get(0).get(3) == 5) {
                        System.out.println("Sales");
                        updateSumList(sumList, normalizedSales, 3);
                    }
                    if (qData.get(0).get(3) == 4) {
                        System.out.println("Sales");
                        updateSumList(sumList, normalizedSales, 2);
                    }
                    if (qData.get(0).get(3) == 3) {
                        System.out.println("Sales");
                        updateSumList(sumList, normalizedSales, 3);
                    }
                    if (qData.get(0).get(4) == 5) {
                        System.out.println("maintenance cost");
                        updateSumList(sumList, normalizedFe2s, 3);
                    }
                    if (qData.get(0).get(4) == 4) {
                        System.out.println("maintenance cost");
                        updateSumList(sumList, normalizedFe2s, 2);
                    }
                    if (qData.get(0).get(4) == 3) {
                        System.out.println("maintenance cost");
                        updateSumList(sumList, normalizedFe2s, 1);
                    }
                }
                if (i == 1) {
                    // Check options for question 2
                    if (qData.get(1).get(0) == 1) {
                        System.out.println("gasoline");
                        updateSumList(sumList, bmwRepository.findAllGasolines(), 10);
                    }
                    if (qData.get(1).get(1) == 1) {
                        System.out.println("diesel");
                        updateSumList(sumList, bmwRepository.findAllDiesels(), 10);
                    }
                    if (qData.get(1).get(2) == 1) {
                        System.out.println("phev");
                        updateSumList(sumList, bmwRepository.findAllPhevs(), 10);
                    }
                    if (qData.get(1).get(3) == 1) {
                        System.out.println("ev");
                        updateSumList(sumList, bmwRepository.findAllEvs(), 10);
                    }
                }
                if (i == 2) {
                    // Check options for question 2
                    if (qData.get(2).get(0) == 1) {
                        System.out.println("Elegant & Reliable");
                        updateSumList(sumList, bmwRepository.findAllSds(), 1);
                    }
                    if (qData.get(2).get(1) == 1) {
                        System.out.println("SUV, Station Wagon");
                        updateSumList(sumList, bmwRepository.findAllSuvs(), 1);
                    }
                    if (qData.get(2).get(2) == 1) {
                        System.out.println("Coupe, Convertible");
                        updateSumList(sumList, bmwRepository.findAllCps(), 1);
                        updateSumList(sumList, bmwRepository.findAllCvs(), 1);
                        updateSumList(sumList, bmwRepository.findAllMseries(), 1);

                    }
                    if (qData.get(2).get(3) == 1) {
                        System.out.println("Hatchback");
                        updateSumList(sumList, bmwRepository.findAllHbs(), 1);
                    }
                }
                if (i == 3) {
                    // Check options for question 2
                    if (qData.get(3).get(0) == 1) {
                        System.out.println("I am a new driver");
                        updateSumList(sumList, bmwRepository.findAllSuvs(), 5);
                        updateSumList(sumList, bmwRepository.findAllUkls(), 1);
                        updateSumList(sumList, bmwRepository.findAllKkls(), 1);
                        updateSumList(sumList, bmwRepository.findAllMseries(), -10);


                    }
                    if (qData.get(3).get(1) == 1) {
                        System.out.println("I like quiet / smooth driving");
                        updateSumList(sumList, bmwRepository.findAllEvs(), 1);
                        updateSumList(sumList, bmwRepository.findAllPhevs(), 1);
                        updateSumList(sumList, bmwRepository.findAllMseries(), -5);

                    }
                    if (qData.get(3).get(2) == 1) {
                        System.out.println("I like driving long distance");
                        updateSumList(sumList, bmwRepository.findAllDiesels(), 1);
                        updateSumList(sumList, normalizedFe2s, 1);

                    }
                    if (qData.get(3).get(3) == 1) {
                        System.out.println("I like to enjoy speed");
                        updateSumList(sumList, bmwRepository.findAllMseries(), 1);
                    }
                    if (qData.get(3).get(3) == 1) {
                        System.out.println("I drive on hazardous roads");
                        updateSumList(sumList, bmwRepository.findAllXdrives(), 1);
                    }
                }
                if (i == 4) {
                    // Check options for question 2
                    if (qData.get(4).get(0) == 1) {
                        System.out.println("Daily city commute");
                        updateSumList(sumList, bmwRepository.findAllSds(), 1);
                        updateSumList(sumList, bmwRepository.findAllEvs(), 1);
                        updateSumList(sumList, bmwRepository.findAllPhevs(), 1);
                        updateSumList(sumList, bmwRepository.findAllUkls(), 1);
                        updateSumList(sumList, bmwRepository.findAllKkls(), -2);


                    }
                    if (qData.get(4).get(1) == 1) {
                        System.out.println("Outdoor activities");
                        updateSumList(sumList, bmwRepository.findAllSuvs(), 1);
                        updateSumList(sumList, bmwRepository.findAllDiesels(), -2);
                        updateSumList(sumList, bmwRepository.findAllMkls(), 1);
                        updateSumList(sumList, bmwRepository.findAllGkls(), 1);
                        updateSumList(sumList, normalizedTrunk, 2);
                        updateSumList(sumList, bmwRepository.findAllXdrives(), 1);



                    }
                    if (qData.get(4).get(2) == 1) {
                        System.out.println("Traveling with family");
                        updateSumList(sumList, bmwRepository.findAllWgs(), 1);
                        updateSumList(sumList, normalizedFe2s, 1);
                        updateSumList(sumList, bmwRepository.findAllMkls(), -2);
                        updateSumList(sumList, bmwRepository.findAllGkls(), 1);
                        updateSumList(sumList, normalizedLegrooms, 1);
                        updateSumList(sumList, normalizedTrunk, 1);

                    }
                    if (qData.get(4).get(3) == 1) {
                        System.out.println("Going for drive");
                        updateSumList(sumList, bmwRepository.findAllCps(), -2);
                        updateSumList(sumList, bmwRepository.findAllCvs(), 1);
                        updateSumList(sumList, bmwRepository.findAllMseries(), 1);

                    }
                }
                if (i == 5) {
                    // Check options for question 2
                    if (qData.get(5).get(0) == 1) {
                        System.out.println("High sound quality");
                        updateSumList(sumList, bmwRepository.findAllSounds(), 5);

                    }
                    if (qData.get(5).get(1) == 1) {
                        System.out.println("Customization");
                        updateSumList(sumList, normalizedDesigns, 5);

                    }
                    if (qData.get(5).get(2) == 1) {
                        System.out.println("Light");
                        updateSumList(sumList, bmwRepository.findAllLights(), 1);
                    }
                    if (qData.get(5).get(3) == 1) {
                        System.out.println("Entertainment");
                        updateSumList(sumList, bmwRepository.findAllEnterps(), 1);
                    }
                    if (qData.get(5).get(4) == 1) {
                        System.out.println("Comfortable Interior");
                        updateSumList(sumList, bmwRepository.findAllComfortableInteriors(), 1);
                    }
                    if (qData.get(5).get(5) == 1) {
                        System.out.println("Driving Assistance");
                        updateSumList(sumList, bmwRepository.findAllDrivingAssistances(), 1);
                    }
                    if (qData.get(5).get(6) == 1) {
                        System.out.println("Convertible");
                        updateSumList(sumList, bmwRepository.findAllCvs(), 5);
                    }
                }
            }
        }

        for(int i = 0 ; i < sumList.size(); i++){
            result.put(modelsList.get(i), sumList.get(i));
        }

//        List<Map.Entry<String,Double>> entryList = new ArrayList<>(result.entrySet());
        entryList = new ArrayList<>(result.entrySet());

        entryList.sort(Map.Entry.<String, Double>comparingByValue().reversed());

        System.out.println(entryList);

        List<Bmw> res = new ArrayList<>();

        for(Map.Entry<String, Double> entry : entryList) {
            String model = entry.getKey();
            double sum = entry.getValue();
            Bmw bmw = bmwRepository.findByModel(model);
            if(bmw != null && bmw.getPrice() >= priceRange.get(0) && bmw.getPrice() <= priceRange.get(1)) {
                res.add(bmw);
            }
        }

        System.out.println(res);
// Limit to the first 3 elements
        List<Bmw> limitedRes = res.size() > 3 ? res.subList(0, 3) : res;

        this.RecoRes = limitedRes;
        System.out.println(RecoRes);
        return ResponseEntity.ok(RecoRes);

    }

    private List<Double> normalize(List<? extends Number> values) {
        double min = values.stream().mapToDouble(Number::doubleValue).min().orElse(0.0);
        double max = values.stream().mapToDouble(Number::doubleValue).max().orElse(1.0); // Avoid division by zero

        return values.stream()
                .map(value -> (value.doubleValue() - min) / (max - min))
                .collect(Collectors.toList());
    }

    private double round(double value, int places) {
        if (places < 0) throw new IllegalArgumentException();

        long factor = (long) Math.pow(10, places);
        value = value * factor;
        long tmp = Math.round(value);
        return (double) tmp / factor;
    }

    private void updateSumList(List<Double> sumList, List<Double> values, int multiplier) {
        for (int k = 0; k < values.size(); k++) {
            if (k < sumList.size()) {
                sumList.set(k, sumList.get(k) + values.get(k) * multiplier);
            }
        }
    }

}


